import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-steps',
  standalone: true,
  templateUrl: './registration-steps.component.html',
  styleUrls: ['./registration-steps.component.scss'],
  imports: [CommonModule],
})
export class RegistrationStepsComponent {
  constructor(public translationService: TranslationService) {}

  t = () => this.translationService.translations();

  distances = [
    {
      type: 'primary',
      title: 'PRIMARIA',
      subtitle: 'Precio especial de lanzamiento ',
      price: '$130.000',
      detail: 'Tarifa vigente hasta el 28 de febrero de 2026',
    },
    {
      type: 'secondary',
      title: 'SECUNDARIA',
      subtitle: 'Precio full',
      price: '$150.000',
      detail: 'Tarifa vigente del 29 al 01 de marzo de 2026',
    },
  ];
}
