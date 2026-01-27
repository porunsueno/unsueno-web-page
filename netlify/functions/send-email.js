const nodemailer = require("nodemailer");
const ejs = require("ejs");
const fs = require("fs").promises;
const path = require("path");

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

async function generateMessageBody(form) {
    const templatePath = path.join(__dirname, 'templates', 'registration.ejs'); 
    const template = await fs.readFile(templatePath, 'utf8');

    return ejs.render(template, form);
}

function handleAttachment(file, name) {
    const attachments = [];

    if(file && name) {
        const base64Data = file.split(';base64,').pop();
        
        attachments.push({
            content: base64Data, 
            filename: name,
            encoding: 'base64'
        });
    }

    return attachments;
}

function handleInlineImages() {
    const cidName = 'registered_image';
    const imagePath = path.join(__dirname, 'templates', 'registered.jpg');

    return {
        filename: 'registered.jpg',
        path: imagePath,
        cid: cidName
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
        const form = JSON.parse(event.body);
        console.log("Request received", form);

        const result = await sendEmail({
            from: process.env.EMAIL_USER,
            to: EMAIL_REGISTRATION,
            subject: "Registro participante: " + form.documentNumber,
            html: await generateMessageBody(form),
            attachments: [
                ...handleAttachment(form.attachment, form.fileName),
                handleInlineImages()
            ]
        });
        
        return result; 

    } catch (error) {
        console.error("Nodemailer Error:", error); 
        
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                message: "Email sending failed",
                details: error.message || "Unknown error"
            }),
        };
    }
}