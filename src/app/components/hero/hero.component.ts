import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  constructor(public translationService: TranslationService) {}
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  private visibilityListener?: () => void;

  ngAfterViewInit() {
    const video = this.heroVideo.nativeElement;

    // Configuración inicial
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    // Intentar reproducir
    this.playVideo();

    // Manejar cuando la pestaña vuelve a ser visible
    this.visibilityListener = () => {
      if (!document.hidden && video.paused) {
        this.playVideo();
      }
    };
    document.addEventListener('visibilitychange', this.visibilityListener);

    // Manejar cuando el video termina (por si loop falla)
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      this.playVideo();
    });

    // Forzar reproducción después de un momento (para algunos navegadores)
    setTimeout(() => {
      if (video.paused) {
        this.playVideo();
      }
    }, 100);
  }

  private playVideo() {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch((error) => {
      console.log('Error al reproducir video:', error);
      // Reintentar después de interacción del usuario
      document.addEventListener(
        'click',
        () => {
          video.play().catch(() => {});
        },
        { once: true }
      );
    });
  }

  t = () => this.translationService.translations();

  targetDate = new Date('2026-04-25T23:59:59');

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);

    if (this.visibilityListener) {
      document.removeEventListener('visibilitychange', this.visibilityListener);
    }
  }

  private startCountdown(): void {
    this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      if (this.intervalId) clearInterval(this.intervalId);
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
