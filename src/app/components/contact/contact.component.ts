import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { HttpClient } from '@angular/common/http';

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
  styleUrls: ['./contact.component.scss']
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
    privacyAccepted: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;

  selectedFileBase64: string | ArrayBuffer | null = null;
  fileName: string | null = null;

  netlifyFunctionUrl = '/.netlify/functions/send-email';

  constructor(public translationService: TranslationService, private http: HttpClient) {
    this.minDate = new Date().toDateString().split('T')[0];
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      
      if (file.size > 5 * 1024 * 1024) {
        alert('File is too large (Max 5MB)');
        return;
      }

      this.fileName = file.name;
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedFileBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      this.selectedFileBase64 = null;
      this.fileName = null;
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

    const formData = {
      ...this.form,
      attachment: this.selectedFileBase64,
      fileName: this.fileName
    }

    this.http.post<NetlifyResponse>(this.netlifyFunctionUrl, formData)
      .subscribe({
        next: (response) => {
        this.isSubmitting = false;

        if (response.details) {
          alert(`¡Casi listo! ${response.message}. Nota: ${response.details}`);
        } else {
          alert('¡Inscripción exitosa! Revisa tu correo.');
        }

        this.showSuccessMessage = true;
        this.resetForm();
        console.log('Respuesta del servidor:', response);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.showSuccessMessage = false;
          const serverError: NetlifyResponse = error.error;
          alert(`Error: ${serverError?.message || 'Error en el servidor'}`);
          console.error('Error sending email: ', error);
        }
      }
    ); 
  }

  resetForm() {
    this.selectedFileBase64 = null;
    this.fileName = null;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
