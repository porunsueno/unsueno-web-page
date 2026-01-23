import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  t = () => this.translationService.translations();

  formData = {
    name: '',
    surname: '',
    documentType: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  };

  documentTypes = [
    {id: 1, name: 'Cédula de Ciudadanía'},
    {id: 2, name: 'Cédula de Extranjería'},
    {id: 3, name: 'Tarjeta de Identidad'},
    {id: 4, name: 'Registro Civil o NUIP'},
    {id: 5, name: 'Pasaporte'},
  ]

  isSubmitting = false;
  showSuccessMessage = false;

  constructor(public translationService: TranslationService) {}

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;
      
      // Reset form
      this.formData = {
        name: '',
        surname: '',
        documentType: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }, 2000);
  }
}
