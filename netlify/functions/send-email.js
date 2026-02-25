const nodemailer = require("nodemailer");
const ejs = require("ejs");
const fs = require("fs").promises;
const path = require("path");
const parser = require("lambda-multipart-parser");

const HOST = process.env.EMAIL_HOST;
const EMAIL = process.env.EMAIL_USER;
const PASS = process.env.EMAIL_PASSWORD;
const EMAIL_REGISTRATION = process.env.EMAIL_REGISTRATION;

if (!HOST || !EMAIL || !PASS || !EMAIL_REGISTRATION) {
  console.error("ERROR: Las variables de usuario o contraseña están vacías.");
  return { statusCode: 500, body: 'Missing configuration.' };
}

// Email connection
const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASS
  }
});

function sendEmail(mail) {
  return new Promise((resolve, reject) => {
    transport.sendMail(mail,
      (error, _) => {
        error
          ? reject({
            statusCode: 500,
            body: JSON.stringify({ message: error.message || "Failed to send email", to: mail.to })
          })
          : resolve({
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent succesfully", to: mail.to })
          });
      }
    )
  })
}

async function generateMessageBody(form, fileName) {
  const templatePath = path.join(__dirname, 'templates', fileName); 
  const template = await fs.readFile(templatePath, 'utf8');

  return ejs.render(template, form);
}

function handleAttachment(files) {
  if (!files || files.length === 0) return [];
  
  const file = files[0];
  return [{
    filename: file.filename,
    content: file.content,
    contentType: file.contentType
  }];
}

function handleInlineImages() {
  const cidName = 'flyer_carrera';
  const imagePath = path.resolve(__dirname, 'templates', 'registered.jpeg');

  return {
    filename: 'registered.jpg',
    path: imagePath,
    cid: cidName,
    contentDisposition: 'inline'
  };
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not supported" })
    };
  }

  try {
    const result = await parser.parse(event);
    console.log("Request received for document:", result.documentNumber);

    const mailToOrganizer = {
      from: process.env.EMAIL_USER,
      to: EMAIL_REGISTRATION,
      subject: "Registro participante: " + result.documentNumber,
      html: await generateMessageBody(result, 'registration.ejs'),
      attachments: [
        ...handleAttachment(result.files)
      ]
    };

    const mailToUser = {
        from: process.env.EMAIL_USER,
        to: result.email,
        subject: '¡Preinscripción Exitosa! - Corramos por un Sueño',
        html: await generateMessageBody(result, 'user-confirmation.ejs'),
        attachments: [handleInlineImages()]
    };

    const results = await Promise.allSettled([
      sendEmail(mailToOrganizer),
      sendEmail(mailToUser)
    ]);

    // Si hubo algún error
    const errors = results.filter(r => r.status === 'rejected');

    if (errors.length > 0) {
      console.error("Algunos correos fallaron:", errors);
      
      // Si ambos fallaron, se lanza error total
      if (errors.length === 2) {
        return {
          statusCode: 500,
          body: JSON.stringify({ message: "Error total al enviar correos" })
        };
      }

      // Si solo uno falló, se devuelve advertencia pero se considera procesado
      return {
        statusCode: 207, // Multi-Status
        body: JSON.stringify({ 
          message: "Inscripción procesada con advertencias", 
          details: "Verifica tu correo. Si no recibes confirmación, comunícate con nosotros." 
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Inscripción procesada y correos enviados" })
    };

  } catch (error) {
    console.error("Nodemailer Error:", error); 

    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: "Error al procesar la inscripción. Comunícate con nosotros si no recibes confirmación.", 
        details: error.message }
      )
    };
  }
}