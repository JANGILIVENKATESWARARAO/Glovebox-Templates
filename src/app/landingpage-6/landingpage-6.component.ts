import { Component } from '@angular/core';
import { Header3Component } from '../header3/header3.component';
import { MotabilityheroComponent } from '../motabilityhero/motabilityhero.component';
import { MotabilityWhatsIncludeComponent } from '../motability-whats-include/motability-whats-include.component';
import { FaqComponent } from '../faq/faq.component';
import { MotabilityOffers1Component } from '../motability-offers-1/motability-offers-1.component';
import { WhatIsMotability1Component } from '../what-is-motability1/what-is-motability1.component';
import { WhatIsMotability2Component } from '../what-is-motability2/what-is-motability2.component';
import { MotabilityWhatsInclude2Component } from '../motability-whats-include2/motability-whats-include2.component';
import { MotabilityOffers2Component } from '../motability-offers-2/motability-offers-2.component';

@Component({
  selector: 'app-landingpage-6',
  standalone: true,
  imports: [Header3Component,MotabilityheroComponent,WhatIsMotability2Component,MotabilityWhatsInclude2Component, MotabilityOffers2Component,FaqComponent],
  templateUrl: './landingpage-6.component.html',
  styleUrl: './landingpage-6.component.css'
})
export class Landingpage6Component {

}
