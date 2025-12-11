import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(public translationService: TranslationService) {}

  t = () => this.translationService.translations();

  distances = [
    {
      title: '3K',
      description: 'Ideal para quienes comienzan o quieren algo suave.',
      category: 'Principiante',
      price: 35000,
    },
    {
      title: '5K',
      description: 'Un reto controlado para avanzar y mejorar.',
      category: 'Intermedio',
      price: 45000,
    },
    {
      title: '10K',
      description: 'Para corredores experimentados que buscan superarse.',
      category: 'Avanzado',
      price: 55000,
    },
  ];
}
