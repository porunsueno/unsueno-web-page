import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatIncludesComponent } from './components/what-includes/what-includes.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RegistrationStepsComponent } from './components/registration-steps/registration-steps.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    WhatIncludesComponent,
    CategoriesComponent,
    RegistrationStepsComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
