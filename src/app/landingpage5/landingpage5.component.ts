import { Component } from '@angular/core';
import { MotabilityheroComponent } from '../motabilityhero/motabilityhero.component';
import { MotabilityWhatsIncludeComponent } from '../motability-whats-include/motability-whats-include.component';
import { FaqComponent } from '../faq/faq.component';
import { MotabilityOffers1Component } from '../motability-offers-1/motability-offers-1.component';
import { WhatIsMotability1Component } from '../what-is-motability1/what-is-motability1.component';
import { Header3Component } from '../header3/header3.component';
import { MotabilityWhatsInclude2Component } from '../motability-whats-include2/motability-whats-include2.component';
import { Footer4Component } from '../footer4/footer4.component';

@Component({
  selector: 'app-landingpage5',
  standalone: true,
  imports: [Header3Component,MotabilityheroComponent,MotabilityWhatsIncludeComponent,FaqComponent,MotabilityOffers1Component,WhatIsMotability1Component,Footer4Component],
  templateUrl: './landingpage5.component.html',
  styleUrl: './landingpage5.component.css'
})
export class Landingpage5Component {

}
