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
      category: 'Familiar, recreativo y pet friendly',
      description:
        'Un recorrido pensado para familias, niños, caminantes y mascotas, ideal para disfrutar, compartir y ser parte de una causa solidaria en un ambiente seguro y tranquilo.',
      price: 35000,
    },
    {
      title: '5K',
      description:
        'Recomendado para runners junior, deportistas y personas con buen estado físico que buscan un desafío moderado y disfrutar de la altura y el entorno natural de La Unión.',
      category: 'Intermedio',
      price: 45000,
    },
    {
      title: '10K',
      description:
        'Diseñado para atletas experimentados y deportistas de alto rendimiento que disfrutan de los grandes retos deportivos y quieren llevar su esfuerzo al máximo.',
      category: 'Avanzado / competitivo',
      price: 55000,
    },
  ];
}
