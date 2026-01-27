import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { HttpClient } from '@angular/common/http';

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
    privacyAccepted: '',
    subject: '',
    message: ''
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

    if (this.isSubmitting) return;
    
    this.isSubmitting = true;

    const formData = {
      ...this.form,
      attachment: this.selectedFileBase64,
      fileName: this.fileName
    }

    this.http.post(this.netlifyFunctionUrl, formData)
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.showSuccessMessage = true;

          // Reset form
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
            privacyAccepted: '',
            subject: '',
            message: ''
          };

          this.selectedFileBase64 = null;
          this.fileName = null;

          alert('Email sent');
          console.log('Email sent: ', response);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.showSuccessMessage = true;
          alert('Error sending email');
          console.error('Error sending email: ', error);
        }
      }
    );
    
  }
}
