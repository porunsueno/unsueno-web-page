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

  minDate: string;

  formData = {
    name: '',
    surname: '',
    documentType: '',
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
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;

  constructor(public translationService: TranslationService) {
    this.minDate = new Date().toDateString().split('T')[0];
  }

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
