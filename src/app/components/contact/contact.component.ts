import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { HttpClient } from '@angular/common/http';

import imageCompression from 'browser-image-compression';

declare let fbq: Function;
import { fieldsOrder } from './fields-order';
import { insertInGoogleSheet } from './google-sheet.service';

interface NetlifyResponse {
  message: string;
  details?: string;
  to?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  t = () => this.translationService.translations();

  minDate: string;

  form = {
    name: '',
    surname: '',
    documentType: '',
    documentNumber: '',
    email: '',
    phoneNumber: '',
    address: '',
    birthdate: '',
    age: '',
    bloodType: '',
    eps: '',
    category: '',
    tShirtSize: '',
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhoneNumber: '',
    belongsToClub: false,
    clubCode: '',
    privacyAccepted: '',
  };

  isSubmitting = false;
  showSuccessMessage = false;

  registerChild = false;
  showChildModal = false;

  registerPet = false;
  showPetModal = false;

  childForm = {
    name: '',
    surname: '',
    documentType: '',
    documentNumber: '',
    birthdate: '',
    age: '',
    bloodType: '',
    eps: '',
    tShirtSize: '',
  };

  petForm = {
    name: '',
    breed: '',
    age: '',
  };

  selectedFile: File | null = null;
  fileName: string | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  netlifyFunctionUrl = '/.netlify/functions/send-email';

  constructor(
    public translationService: TranslationService,
    private http: HttpClient
  ) {
    this.minDate = new Date().toDateString().split('T')[0];
  }

  async onFileSelected(event: any) {
    let file: File = event.target.files[0];

    if (file) {
      const sizeInMB = file.size / (1024 * 1024);

      if (sizeInMB > 20) {
        alert(
          'La imagen es demasiado grande (máximo 20MB). Por favor, intenta con otra foto.'
        );
        event.target.value = '';
        return;
      }

      if (sizeInMB > 5) {
        const options = {
          maxSizeMB: 4,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };

        try {
          const compressedFile = await imageCompression(file, options);
          file = new File([compressedFile], file.name, { type: file.type });
        } catch (error) {
          console.error('Error comprimiendo:', error);
        }
      }

      this.selectedFile = file;
      this.fileName = file.name;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      this.selectedFile = null;
      this.fileName = null;
      this.imagePreview = null;
    }
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (!this.validateEmail(this.form.email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (this.isSubmitting) return;

    this.isSubmitting = true;

    const formData = new FormData();

    // Agregar campos del formulario al FormData
    Object.keys(this.form).forEach((key) => {
      const value = (this.form as any)[key];
      formData.append(key, value !== null && value !== undefined ? value : '');
    });

    if (this.registerChild) {
      Object.keys(this.childForm).forEach((key) => {
        const value = (this.childForm as any)[key];
        formData.append(
          `child_${key}`,
          value !== null && value !== undefined ? value : ''
        );
      });
    }

    if (this.registerPet) {
      Object.keys(this.petForm).forEach((key) => {
        const value = (this.petForm as any)[key];
        formData.append(
          `pet_${key}`,
          value !== null && value !== undefined ? value : ''
        );
      });
    }

    if (this.selectedFile) {
      formData.append(
        'attachment',
        this.selectedFile,
        this.fileName || 'archivo'
      );
    }
    const OMIT_FIELDS = ['attachment'];
    const row = fieldsOrder
      .filter((field) => !OMIT_FIELDS.includes(field)) // omite el campo
      .map((field) => {
        let value = formData.get(field);

        if (value === null || value === '' || value === undefined) {
          return 'N/A';
        }
        if (field.includes('birthdate') && value) {
          return new Date(value.toString()).toLocaleDateString();
        }
        if (value.toString().toLocaleLowerCase() === 'true') return 'SI';
        if (value.toString().toLocaleLowerCase() === 'false') return 'NO';
        if (typeof value === 'boolean') {
          return value ? 'SI' : 'NO';
        }

        return value.toString();
      });
    insertInGoogleSheet(row);

    this.http
      .post<NetlifyResponse>(this.netlifyFunctionUrl, formData)
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;

          if (response.details) {
            alert(
              `¡Casi listo! ${response.message}. Nota: ${response.details}`
            );
          } else {
            alert('¡Inscripción exitosa! Revisa tu correo.');
          }

          this.showSuccessMessage = true;
          this.resetForm();
          console.log('Respuesta del servidor:', response);

          if (typeof fbq === 'function') {
            fbq('track', 'ViewContent');
          }
        },
        error: (error) => {
          this.isSubmitting = false;
          this.showSuccessMessage = false;
          const serverError = error.error;
          alert(`Error: ${serverError?.message || 'Error en el servidor'}`);
          console.error('Error sending email: ', error);
          if (typeof fbq === 'function') {
            fbq('track', 'ViewContent');
          }
        },
      });
  }

  onRegisterChildChange() {
    if (this.registerChild) {
      if (this.form.category !== '3 Km') {
        this.form.category = '3 Km';
        alert(
          this.translationService.translations().registrations.form
            .childCategoryWarning
        );
      }
      this.showChildModal = true;
    } else {
      this.showChildModal = false;
      this.resetChildForm();
    }
  }

  closeChildModal() {
    this.showChildModal = false;
    // Uncheck if they haven't filled main child data
    if (!this.childForm.name || !this.childForm.surname) {
      this.registerChild = false;
    }
  }

  confirmChildData() {
    this.showChildModal = false;
  }

  resetChildForm() {
    this.childForm = {
      name: '',
      surname: '',
      documentType: '',
      documentNumber: '',
      birthdate: '',
      age: '',
      bloodType: '',
      eps: '',
      tShirtSize: '',
    };
  }

  onRegisterPetChange() {
    if (this.registerPet) {
      if (this.form.category !== '3 Km') {
        this.form.category = '3 Km';
        alert(
          this.translationService.translations().registrations.form
            .petCategoryWarning
        );
      }
      this.showPetModal = true;
    } else {
      this.showPetModal = false;
      this.resetPetForm();
    }
  }

  closePetModal() {
    this.showPetModal = false;
    // Uncheck if they haven't filled main pet data
    if (!this.petForm.name) {
      this.registerPet = false;
    }
  }

  confirmPetData() {
    this.showPetModal = false;
  }

  resetPetForm() {
    this.petForm = {
      name: '',
      breed: '',
      age: '',
    };
  }

  resetForm() {
    this.form = {
      name: '',
      surname: '',
      documentType: '',
      documentNumber: '',
      email: '',
      phoneNumber: '',
      address: '',
      birthdate: '',
      age: '',
      bloodType: '',
      eps: '',
      category: '',
      tShirtSize: '',
      emergencyName: '',
      emergencyRelationship: '',
      emergencyPhoneNumber: '',
      belongsToClub: false,
      clubCode: '',
      privacyAccepted: '',
    };
    this.resetChildForm();
    this.registerChild = false;
    this.resetPetForm();
    this.registerPet = false;
    this.selectedFile = null;
    this.fileName = null;
    this.imagePreview = null;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
