import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AboutPage } from '../pages/about-page/about-page';
import { ServicePage } from '../pages/service-page/service-page';
import { ContactPage } from '../pages/contact-page/contact-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'services',
    component: ServicePage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
];
