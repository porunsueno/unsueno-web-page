import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  currentSlide = signal(0);

  carouselImages = [
    {
      url: '/about-section/carrousel-0.jpg',
      alt: 'Start-line',
    },
    {
      url: '/about-section/carrousel-1.jpg',
      alt: 'Team collaboration',
    },
    {
      url: '/about-section/carrousel-2.jpg',
      alt: 'Professional workspace',
    },
  ];

  constructor(public translationService: TranslationService) {}

  t = () => this.translationService.translations();

  nextSlide() {
    this.currentSlide.set(
      (this.currentSlide() + 1) % this.carouselImages.length
    );
  }

  prevSlide() {
    this.currentSlide.set(
      this.currentSlide() === 0
        ? this.carouselImages.length - 1
        : this.currentSlide() - 1
    );
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
