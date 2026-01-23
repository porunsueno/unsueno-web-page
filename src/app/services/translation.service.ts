import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'es';

export interface Translations {
  // Header
  header: {
    companyName: string;
    navigation: {
      home: string;
      about: string;
      services: string;
      categories: string;
      testimonials: string;
      contact: string;
    };
    cta: string;
  };

  // Hero
  hero: {
    title: {
      main: string;
      highlight: string;
      rest: string;
    };
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    stats: {
      stat1: { number: string; label: string };
      stat2: { number: string; label: string };
      stat3: { number: string; label: string };
      stat4: { number: string; label: string };
    };
  };

  // About
  about: {
    title: {
      main: string;
      highlight: string;
    };
    description1: string;
    description2: string;
    features: {
      feature1: { title: string; text: string };
      feature2: { title: string; text: string };
      feature3: { title: string; text: string };
      feature4: { title: string; text: string };
    };
    cta: string;
    badge: {
      number: string;
      text: string;
    };
    imageAlt: string;
  };

  whatIncludes: {
    title: string;
  };

  // categories
  categories: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    viewAllButton: string;
    projects: {
      project1: {
        title: string;
        description: string;
        category: string;
        info: string;
        value: string;
        tags: string[];
      };
      project2: {
        title: string;
        description: string;
        category: string;
        info: string;
        value: string;
        tags: string[];
      };
      project3: {
        title: string;
        description: string;
        category: string;
        info: string;
        value: string;
        tags: string[];
      };
      project4: {
        title: string;
        description: string;
        category: string;
        info: string;
        value: string;
        tags: string[];
      };
      project5: {
        title: string;
        description: string;
        category: string;
        info: string;
        value: string;
        tags: string[];
      };
      project6: {
        title: string;
        description: string;
        category: string;
        info: string;
        value: string;
        tags: string[];
      };
    };
    buttons: {
      livePreview: string;
      download: string;
    };
  };
  // Testimonials
  testimonials: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    customers: {
      customer1: {
        name: string;
        position: string;
        company: string;
        text: string;
      };
      customer2: {
        name: string;
        position: string;
        company: string;
        text: string;
      };
      customer3: {
        name: string;
        position: string;
        company: string;
        text: string;
      };
    };
  };

  // Contact
  contact: {
    title: {
      main: string
    };
    description: string;
    form: {
      title: string;
      nameHeader: string;
      namePlaceholder: string;
      surnameHeader: string;
      surnamePlaceholder: string;
      documentTypeHeader: string,
      documentTypePlaceholder: string,
      documentTypes: {id: number, label: string}[];
      emailHeader: string;
      emailPlaceholder: string;
      phoneNumberHeader: string;
      phoneNumberPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successMessage: string;
    };
    info: {
      title: string;
      email: string;
      support: string;
      responseTime: string;
    };
  };

  // Footer
  footer: {
    companyName: string;
    description: string;
    quickLinks: string;
    servicesTitle: string;
    services: string[];
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      button: string;
    };
    copyright: string;
  };
  registrationSteps: {
    title: string;
    steps: {
      primary: {
        title: string;
        subtitle: string;
        price: string;
        detail: string;
      };
      secondary: {
        title: string;
        subtitle: string;
        price: string;
        detail: string;
      };
    };
    subtitle: string;
    detail: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    header: {
      companyName: '[Your Company Name]',
      navigation: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        categories: 'categories',
        testimonials: 'Testimonials',
        contact: 'Contact',
      },
      cta: '[Your Call to Action]',
    },
    hero: {
      title: {
        main: '[Your Main Headline]',
        highlight: '[Highlight Words]',
        rest: '[Rest of Headline]',
      },
      subtitle:
        '[Your company description goes here. Explain what you do, who you serve, and what makes you unique. This is your elevator pitch to visitors and should be compelling and clear.]',
      cta: {
        primary: '[Primary Action]',
        secondary: '[Secondary Action]',
      },
      stats: {
        stat1: { number: '[Stat 1]', label: '[Label 1]' },
        stat2: { number: '[Stat 2]', label: '[Label 2]' },
        stat3: { number: '[Stat 3]', label: '[Label 3]' },
        stat4: { number: '[Stat 4]', label: '[Label 4]' },
      },
    },
    about: {
      title: {
        main: '[About Section Title]',
        highlight: '[Highlight]',
      },
      description1:
        '[Your company mission and vision goes here. Describe what your company does, what values drive your work, and what makes you different from competitors. This is where you tell your story and build trust with potential customers.]',
      description2:
        '[Additional information about your company, team, or approach. You can mention your target audience, years of experience, or any unique methodologies you use.]',
      features: {
        feature1: {
          title: '[Feature 1 Title]',
          text: '[Description of your first key feature or advantage]',
        },
        feature2: {
          title: '[Feature 2 Title]',
          text: '[Description of your second key feature or advantage]',
        },
        feature3: {
          title: '[Feature 3 Title]',
          text: '[Description of your third key feature or advantage]',
        },
        feature4: {
          title: '[Feature 4 Title]',
          text: '[Description of your fourth key feature or advantage]',
        },
      },
      cta: '[About Section CTA]',
      badge: { number: '[Number]', text: '[Metric]' },
      imageAlt: '[Your company image description]',
    },
    whatIncludes: {
      title: '',
    },
    categories: {
      title: {
        main: '[categories Section Title]',
        highlight: '[Highlight]',
      },
      description:
        '[Description of your work, projects, or case studies. Showcase your best work and explain how it demonstrates your capabilities and the results you achieve for clients.]',
      viewAllButton: 'Browse All Templates',
      projects: {
        project1: {
          title: '[Project 1 Title]',
          description:
            '[Brief description of your first project or case study. Highlight the key results or features.]',
          category: '[Category]',
          info: '[Info]',
          value: '[Value]',
          tags: ['[Tag 1]', '[Tag 2]', '[Tag 3]'],
        },
        project2: {
          title: '[Project 2 Title]',
          description:
            '[Brief description of your second project or case study. Highlight the key results or features.]',
          category: '[Category]',
          info: '[Info]',
          value: '[Value]',
          tags: ['[Tag 1]', '[Tag 2]', '[Tag 3]'],
        },
        project3: {
          title: '[Project 3 Title]',
          description:
            '[Brief description of your third project or case study. Highlight the key results or features.]',
          category: '[Category]',
          info: '[Info]',
          value: '[Value]',
          tags: ['[Tag 1]', '[Tag 2]', '[Tag 3]'],
        },
        project4: {
          title: '[Project 4 Title]',
          description:
            '[Brief description of your fourth project or case study. Highlight the key results or features.]',
          category: '[Category]',
          info: '[Info]',
          value: '[Value]',
          tags: ['[Tag 1]', '[Tag 2]', '[Tag 3]'],
        },
        project5: {
          title: '[Project 5 Title]',
          description:
            '[Brief description of your fifth project or case study. Highlight the key results or features.]',
          category: '[Category]',
          info: '[Info]',
          value: '[Value]',
          tags: ['[Tag 1]', '[Tag 2]', '[Tag 3]'],
        },
        project6: {
          title: '[Project 6 Title]',
          description:
            '[Brief description of your sixth project or case study. Highlight the key results or features.]',
          category: '[Category]',
          info: '[Info]',
          value: '[Value]',
          tags: ['[Tag 1]', '[Tag 2]', '[Tag 3]'],
        },
      },
      buttons: {
        livePreview: 'Live Preview',
        download: 'Download',
      },
    },
    registrationSteps: {
      title: 'Etapas de inscripción',
      steps: {
        primary: {
          title: 'Primaria',
          subtitle: 'Precio especial de lanzamiento',
          price: '130.000',
          detail: 'Tarifa vigente hasta el 31 de enero del 2026',
        },
        secondary: {
          title: 'Secundaria',
          subtitle: 'Precio full',
          price: '150.000',
          detail: 'Tarifa vigente desde el 01 de febrero del 2026 hasta el ...',
        },
      },
      subtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      detail:
        'Similique eligendi reiciendis dolorum deserunt dolores consequatur placeat inventore voluptates, perspiciatis quidem obcaecati, quaerat, saepe nobis culpa eius dolorem beatae animi. Possimus?',
    },
    testimonials: {
      title: {
        main: '[Testimonials Section Title]',
        highlight: '[Highlight]',
      },
      description:
        '[Description about your customer testimonials. Explain how customer feedback validates your work and builds trust with potential clients.]',
      customers: {
        customer1: {
          name: '[Customer 1 Name]',
          position: '[Customer 1 Position]',
          company: '[Customer 1 Company]',
          text: '[Customer testimonial goes here. Include specific results, benefits they experienced, or positive feedback about your service or product.]',
        },
        customer2: {
          name: '[Customer 2 Name]',
          position: '[Customer 2 Position]',
          company: '[Customer 2 Company]',
          text: '[Customer testimonial goes here. Include specific results, benefits they experienced, or positive feedback about your service or product.]',
        },
        customer3: {
          name: '[Customer 3 Name]',
          position: '[Customer 3 Position]',
          company: '[Customer 3 Company]',
          text: '[Customer testimonial goes here. Include specific results, benefits they experienced, or positive feedback about your service or product.]',
        },
      },
    },
    contact: {
      title: {
        main: 'Registrations',
      },
      description:
        '[Contact section description. Encourage visitors to reach out, mention what they can expect when they contact you, and include any incentives like free consultations or estimates.]',
      form: {
        title: 'Sign up here',
        nameHeader: 'Name',
        namePlaceholder: 'Enter your name',
        surnameHeader: 'Surname',
        surnamePlaceholder: 'Enter your surname',
        documentTypeHeader: 'Document Type',
        documentTypePlaceholder: 'Choose a document type',
        documentTypes: [
          {id: 1, label: 'Government Identification'},
          {id: 2, label: 'Foreigners Identity Card'},
          {id: 3, label: 'Identity card'},
          {id: 4, label: 'Civil Registry or NUIP'},
          {id: 5, label: 'Passport'}
        ],
        emailHeader: 'Email Address',
        emailPlaceholder: 'your.email@example.com',
        phoneNumberHeader: 'Phone Number',
        phoneNumberPlaceholder: 'Enter your phone number',
        subject: 'Subject',
        subjectPlaceholder: '[Subject placeholder]',
        message: 'Message *',
        messagePlaceholder: '[Your message placeholder text here...]',
        submit: 'Send Message',
        sending: 'Sending...',
        successMessage: 'Thank you! Your message has been sent successfully.',
      },
      info: {
        title: 'Contact Information',
        email: 'Email Address',
        support: 'Support',
        responseTime: 'Response Time',
      },
    },
    footer: {
      companyName: '[Your Company Name]',
      description:
        '[Your company description goes here. Brief explanation of what you do and your value proposition to customers.]',
      quickLinks: 'Quick Links',
      servicesTitle: '[Services Section Title]',
      services: [
        '[Service 1]',
        '[Service 2]',
        '[Service 3]',
        '[Service 4]',
        '[Service 5]',
        '[Service 6]',
      ],
      newsletter: {
        title: 'Stay Updated',
        description:
          '[Newsletter description. Explain what subscribers will receive and the value of signing up.]',
        placeholder: 'Enter your email',
        button: 'Subscribe',
      },
      copyright: 'All rights reserved.',
    },
  },
  es: {
    header: {
      companyName: 'Corramos por un sueño',
      navigation: {
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        categories: 'Categorias',
        testimonials: 'Testimonios',
        contact: 'Contacto',
      },
      cta: '[Tu llamada a la acción]',
    },
    hero: {
      title: {
        main: '',
        highlight: '01-feb-2026',
        rest: 'La Unión ANT.',
      },
      subtitle: '',
      cta: {
        primary: '¡Quiero inscribirme!',
        secondary: '[Acción Secundaria]',
      },
      stats: {
        stat1: { number: '[Estadística 1]', label: '[Etiqueta 1]' },
        stat2: { number: '[Estadística 2]', label: '[Etiqueta 2]' },
        stat3: { number: '[Estadística 3]', label: '[Etiqueta 3]' },
        stat4: { number: '[Estadística 4]', label: '[Etiqueta 4]' },
      },
    },
    about: {
      title: {
        main: '¿Por qué es especial?',
        highlight: '',
      },
      description1:
        '“Corramos por un sueño” es más que una carrera: es un encuentro donde el deporte, la solidaridad y la educación se unen para transformar vidas. Cada paso apoya la formación de niños y jóvenes, fortalece a sus familias y hace posible la construcción de nuevos espacios de aprendizaje, en medio de paisajes increíbles y una causa que convierte sueños en realidades.',
      description2: '',
      features: {
        feature1: {
          title: 'Educación que transforma vidas',
          text: 'Cada inscripción apoya directamente la formación de niños y jóvenes',
        },
        feature2: {
          title: 'Deporte con propósito',
          text: 'No es solo correr: es unir el espíritu deportivo con una causa social',
        },
        feature3: {
          title: 'Impacto en las familias',
          text: 'El proyecto fortalece no solo a los niños, sino también a sus familias, generando bienestar, acompañamiento y nuevas oportunidades.',
        },
        feature4: {
          title: 'Paisajes que inspiran',
          text: 'La carrera se vive en medio de escenarios naturales increíbles, donde mente, cuerpo y corazón avanzan juntos por un sueño.',
        },
      },
      cta: 'Inscríbete solo por $140.000',
      badge: { number: '[Número]', text: '[Métrica]' },
      imageAlt: '[Descripción de imagen de tu empresa]',
    },
    whatIncludes: {
      title: 'Qué incluye',
    },
    registrationSteps: {
      title: 'Etapas de inscripción',
      steps: {
        primary: {
          title: 'Primaria',
          subtitle: 'Precio especial de lanzamiento',
          price: '130.000',
          detail: 'Tarifa vigente hasta el 31 de enero del 2026',
        },
        secondary: {
          title: 'Secundaria',
          subtitle: 'Precio full',
          price: '150.000',
          detail: 'Tarifa vigente desde el 01 de febrero del 2026 hasta el ...',
        },
      },
      subtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      detail:
        'Similique eligendi reiciendis dolorum deserunt dolores consequatur placeat inventore voluptates, perspiciatis quidem obcaecati, quaerat, saepe nobis culpa eius dolorem beatae animi. Possimus?',
    },
    categories: {
      title: {
        main: '[Título Sección Portafolio]',
        highlight: '[Destacado]',
      },
      description:
        '[Descripción de tu trabajo, proyectos o casos de estudio. Muestra tu mejor trabajo y explica cómo demuestra tus capacidades y los resultados que logras para los clientes.]',
      viewAllButton: 'Ver Todas las Plantillas',
      projects: {
        project1: {
          title: '[Título Proyecto 1]',
          description:
            '[Breve descripción de tu primer proyecto o caso de estudio. Destaca los resultados clave o características.]',
          category: '[Categoría]',
          info: '[Info]',
          value: '[Valor]',
          tags: ['[Etiqueta 1]', '[Etiqueta 2]', '[Etiqueta 3]'],
        },
        project2: {
          title: '[Título Proyecto 2]',
          description:
            '[Breve descripción de tu segundo proyecto o caso de estudio. Destaca los resultados clave o características.]',
          category: '[Categoría]',
          info: '[Info]',
          value: '[Valor]',
          tags: ['[Etiqueta 1]', '[Etiqueta 2]', '[Etiqueta 3]'],
        },
        project3: {
          title: '[Título Proyecto 3]',
          description:
            '[Breve descripción de tu tercer proyecto o caso de estudio. Destaca los resultados clave o características.]',
          category: '[Categoría]',
          info: '[Info]',
          value: '[Valor]',
          tags: ['[Etiqueta 1]', '[Etiqueta 2]', '[Etiqueta 3]'],
        },
        project4: {
          title: '[Título Proyecto 4]',
          description:
            '[Breve descripción de tu cuarto proyecto o caso de estudio. Destaca los resultados clave o características.]',
          category: '[Categoría]',
          info: '[Info]',
          value: '[Valor]',
          tags: ['[Etiqueta 1]', '[Etiqueta 2]', '[Etiqueta 3]'],
        },
        project5: {
          title: '[Título Proyecto 5]',
          description:
            '[Breve descripción de tu quinto proyecto o caso de estudio. Destaca los resultados clave o características.]',
          category: '[Categoría]',
          info: '[Info]',
          value: '[Valor]',
          tags: ['[Etiqueta 1]', '[Etiqueta 2]', '[Etiqueta 3]'],
        },
        project6: {
          title: '[Título Proyecto 6]',
          description:
            '[Breve descripción de tu sexto proyecto o caso de estudio. Destaca los resultados clave o características.]',
          category: '[Categoría]',
          info: '[Info]',
          value: '[Valor]',
          tags: ['[Etiqueta 1]', '[Etiqueta 2]', '[Etiqueta 3]'],
        },
      },
      buttons: {
        livePreview: 'Vista Previa',
        download: 'Descargar',
      },
    },
    testimonials: {
      title: {
        main: '[Título Sección Testimonios]',
        highlight: '[Destacado]',
      },
      description:
        '[Descripción sobre los testimonios de tus clientes. Explica cómo las opiniones de los clientes validan tu trabajo y generan confianza con clientes potenciales.]',
      customers: {
        customer1: {
          name: '[Nombre Cliente 1]',
          position: '[Posición Cliente 1]',
          company: '[Empresa Cliente 1]',
          text: '[El testimonio del cliente va aquí. Incluye resultados específicos, beneficios que experimentaron o comentarios positivos sobre tu servicio o producto.]',
        },
        customer2: {
          name: '[Nombre Cliente 2]',
          position: '[Posición Cliente 2]',
          company: '[Empresa Cliente 2]',
          text: '[El testimonio del cliente va aquí. Incluye resultados específicos, beneficios que experimentaron o comentarios positivos sobre tu servicio o producto.]',
        },
        customer3: {
          name: '[Nombre Cliente 3]',
          position: '[Posición Cliente 3]',
          company: '[Empresa Cliente 3]',
          text: '[El testimonio del cliente va aquí. Incluye resultados específicos, beneficios que experimentaron o comentarios positivos sobre tu servicio o producto.]',
        },
      },
    },
    contact: {
      title: {
        main: 'Inscripciones',
      },
      description:
        '[Descripción de la sección de contacto. Anima a los visitantes a contactarte, menciona qué pueden esperar cuando te contacten e incluye incentivos como consultas gratuitas o estimaciones.]',
      form: {
        title: 'Inscríbete aquí',
        nameHeader: 'Nombres',
        namePlaceholder: 'Ingresa tu nombre',
        surnameHeader: 'Apellidos',
        surnamePlaceholder: 'Ingresa tus apellidos',
        documentTypeHeader: 'Tipo de Documento',
        documentTypePlaceholder: 'Selecciona un documento',
        documentTypes: [
          {id: 1, label: 'Cédula de Ciudadanía'},
          {id: 2, label: 'Cédula de Extranjería'},
          {id: 3, label: 'Tarjeta de Identidad'},
          {id: 4, label: 'Registro Civil o NUIP'},
          {id: 5, label: 'Pasaporte'}
        ],
        emailHeader: 'Dirección de Correo',
        emailPlaceholder: 'tu.correo@ejemplo.com',
        phoneNumberHeader: 'Número de Celular',
        phoneNumberPlaceholder: 'Ingresa tu número de celular',
        subject: 'Asunto',
        subjectPlaceholder: '[Placeholder del asunto]',
        message: 'Mensaje *',
        messagePlaceholder: '[Tu texto placeholder del mensaje aquí...]',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        successMessage: '¡Gracias! Tu mensaje ha sido enviado exitosamente.',
      },
      info: {
        title: 'Información de Contacto',
        email: 'Dirección de Email',
        support: 'Soporte',
        responseTime: 'Tiempo de Respuesta',
      },
    },
    footer: {
      companyName: '[Nombre de Tu Empresa]',
      description:
        '[La descripción de tu empresa va aquí. Breve explicación de lo que haces y tu propuesta de valor para los clientes.]',
      quickLinks: 'Enlaces Rápidos',
      servicesTitle: '[Título Sección Servicios]',
      services: [
        '[Servicio 1]',
        '[Servicio 2]',
        '[Servicio 3]',
        '[Servicio 4]',
        '[Servicio 5]',
        '[Servicio 6]',
      ],
      newsletter: {
        title: 'Mantente Actualizado',
        description:
          '[Descripción del newsletter. Explica qué recibirán los suscriptores y el valor de suscribirse.]',
        placeholder: 'Ingresa tu email',
        button: 'Suscribirse',
      },
      copyright: 'Todos los derechos reservados.',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage = signal<Language>('es');

  constructor() {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      this.currentLanguage.set(savedLanguage);
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage();
  }

  setLanguage(language: Language) {
    this.currentLanguage.set(language);
    localStorage.setItem('language', language);
  }

  getTranslations(): Translations {
    return translations[this.currentLanguage()];
  }

  // Computed signal for reactive translations
  translations = () => translations[this.currentLanguage()];
}
