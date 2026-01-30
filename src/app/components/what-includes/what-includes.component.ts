import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-what-includes',
  standalone: true,
  templateUrl: './what-includes.component.html',
  styleUrls: ['./what-includes.scss'],
})
export class WhatIncludesComponent {
  constructor(public translationService: TranslationService) {}

  t = () => this.translationService.translations();

  items = [
    {
      title: 'Kit solidario de patrocinadores',
      icon: '/what-includes-section/01-kit-solidario-de-patrocinadores.svg',
      detail: 'Obsequios de marcas aliadas.',
    },
    {
      title: 'Camiseta exclusiva del evento',
      icon: '/what-includes-section/02-camiseta.svg',
      detail: 'Diseño oficial conmemorativo.',
    },
    {
      title: 'Numeración',
      icon: '/what-includes-section/03-numeracion.svg',
      detail: 'Identificación para la carrera.',
    },
    {
      title: 'Medalla de participación',
      icon: '/what-includes-section/04-medalla.svg',
      detail: 'Reconocimiento al finalizar.',
    },
    {
      title: 'Hidratación',
      icon: '/what-includes-section/05-hidratacion.svg',
      detail: 'Puntos de agua en el recorrido.',
    },
    {
      title: 'Póliza',
      icon: '/what-includes-section/06-poliza.svg',
      detail: 'Seguro durante el evento.',
    },
    {
      title: 'Primeros auxilios',
      icon: '/what-includes-section/07-Primeros-auxilios.svg',
      detail: 'Asistencia médica disponible.',
    },
    {
      title: 'Vías cerradas',
      icon: '/what-includes-section/08-vias-cerradas.svg',
      detail: 'Recorrido seguro y controlado.',
    },
    {
      title: 'Un espacio para compartir',
      icon: '/what-includes-section/09-El-mejor-lugar-para-compartir-y-construir-futuro.svg',
      detail: 'Encuentro, comunidad y propósito.',
    },
    {
      title: 'Registro fotográfico oficial',
      icon: '/what-includes-section/Fotos.png',
      detail:
        'Cobertura profesional de los momentos más importantes de la carrera.',
    },
    {
      title: 'Activaciones y sorpresas',
      icon: '/what-includes-section/sorpresas.png',
      detail: 'Dinámicas y obsequios para los participantes del evento.',
    },
  ];

  private intervalId?: ReturnType<typeof setInterval>;
}
