import { Component } from '@angular/core';
import { Banner } from '../../components/common/banner/banner';
import { ServiceCardContainer } from '../../components/home/service-card-container/service-card-container';
import { Industries } from '../../components/home/industries/industries';

@Component({
  selector: 'app-home-page',
  imports: [Banner, ServiceCardContainer, Industries],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
