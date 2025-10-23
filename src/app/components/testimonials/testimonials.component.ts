import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: '[Customer 1 Name]',
      position: '[Customer 1 Position]',
      company: '[Customer 1 Company]',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: '[Customer testimonial goes here. Include specific results, benefits they experienced, or positive feedback about your service or product.]',
      rating: 5
    },
    {
      name: '[Customer 2 Name]',
      position: '[Customer 2 Position]',
      company: '[Customer 2 Company]',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: '[Customer testimonial goes here. Include specific results, benefits they experienced, or positive feedback about your service or product.]',
      rating: 5
    },
    {
      name: '[Customer 3 Name]',
      position: '[Customer 3 Position]',
      company: '[Customer 3 Company]',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: '[Customer testimonial goes here. Include specific results, benefits they experienced, or positive feedback about your service or product.]',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
