import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(public translationService: TranslationService) {}

  t = () => this.translationService.translations();

  get templates() {
    const t = this.t();
    return [
      {
        title: t.portfolio.projects.project1.title,
        description: t.portfolio.projects.project1.description,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: t.portfolio.projects.project1.category,
        pages: t.portfolio.projects.project1.info,
        price: t.portfolio.projects.project1.value,
        tags: t.portfolio.projects.project1.tags
      },
      {
        title: t.portfolio.projects.project2.title,
        description: t.portfolio.projects.project2.description,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: t.portfolio.projects.project2.category,
        pages: t.portfolio.projects.project2.info,
        price: t.portfolio.projects.project2.value,
        tags: t.portfolio.projects.project2.tags
      },
      {
        title: t.portfolio.projects.project3.title,
        description: t.portfolio.projects.project3.description,
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: t.portfolio.projects.project3.category,
        pages: t.portfolio.projects.project3.info,
        price: t.portfolio.projects.project3.value,
        tags: t.portfolio.projects.project3.tags
      },
      {
        title: t.portfolio.projects.project4.title,
        description: t.portfolio.projects.project4.description,
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: t.portfolio.projects.project4.category,
        pages: t.portfolio.projects.project4.info,
        price: t.portfolio.projects.project4.value,
        tags: t.portfolio.projects.project4.tags
      },
      {
        title: t.portfolio.projects.project5.title,
        description: t.portfolio.projects.project5.description,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: t.portfolio.projects.project5.category,
        pages: t.portfolio.projects.project5.info,
        price: t.portfolio.projects.project5.value,
        tags: t.portfolio.projects.project5.tags
      },
      {
        title: t.portfolio.projects.project6.title,
        description: t.portfolio.projects.project6.description,
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: t.portfolio.projects.project6.category,
        pages: t.portfolio.projects.project6.info,
        price: t.portfolio.projects.project6.value,
        tags: t.portfolio.projects.project6.tags
      }
    ];
  }
}
