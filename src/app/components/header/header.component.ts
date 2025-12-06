import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslationService,
  Language,
} from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isScrolled = true;
  isMenuOpen = false;

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    //this.updateScrollState();
  }

  t = () => this.translationService.translations();

  onLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.translationService.setLanguage(target.value as Language);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    //this.updateScrollState();
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMobileMenu() {
    this.isMenuOpen = false;
  }

  get headerClasses() {
    return `header ${
      this.isScrolled ? 'header--scrolled' : 'header--transparent'
    }`;
  }

  get mobileMenuClasses() {
    return `header__mobile-menu-wrapper ${
      this.isMenuOpen
        ? 'header__mobile-menu-wrapper--open'
        : 'header__mobile-menu-wrapper--closed'
    }`;
  }
}
