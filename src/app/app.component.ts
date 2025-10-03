import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { Header4Component } from './header4/header4.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FindYourCar1Component } from './find-your-car1/find-your-car1.component';
import { FindYourCar2Component } from './find-your-car-2/find-your-car-2.component';
import { TrustedBrand1Component } from './trusted-brand-1/trusted-brand-1.component';
import { TrustedBrand2Component } from './trusted-brand-2/trusted-brand-2.component';
import { VehicalsServices1Component } from './vehicals-services-1/vehicals-services-1.component';
import { app } from '../../server';
import { AboutParkway1Component } from './about-parkway-1/about-parkway-1.component';
import { VechicalServices2Component } from './vechical-services-2/vechical-services-2.component';
import { Banner1Component } from './banner1/banner1.component';
import { Banner2Component } from './banner2/banner2.component';
import { Banner3Component } from './banner3/banner3.component';
import { Motability1Component } from './motability1/motability1.component';
import { Motability2Component } from './motability2/motability2.component';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';
import { Footer3Component } from './footer3/footer3.component';
import { Template1Component } from './template1/template1.component';
import { FaqComponent } from './faq/faq.component';
import { MotabilityheroComponent } from './motabilityhero/motabilityhero.component';
import { MotabilityWhatsIncludeComponent } from './motability-whats-include/motability-whats-include.component';
import { Landingpage1Component } from './landingpage1/landingpage1.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { Landingpage3Component } from './landingpage3/landingpage3.component';
import { Landingpage5Component } from './landingpage5/landingpage5.component';
import { Landingpage6Component } from './landingpage-6/landingpage-6.component';
import { AboutParkway2Component } from './about-parkway-2/about-parkway-2.component';
import { Landingpage4Component } from './landingpage4/landingpage4.component';
import { Footer4Component } from './footer4/footer4.component';
import { Landingpage7Component } from './landingpage7/landingpage7.component';
import { Landingpage8Component } from './landingpage8/landingpage8.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HomepageHero1Component } from './homepage-hero1/homepage-hero1.component';
import { UsedCars1Component } from './used-cars1/used-cars1.component';
import { Motability3Component } from './motability3/motability3.component';
import { PerfectPartner1Component } from './perfect-partner1/perfect-partner1.component';
import { VechicalsServices3Component } from './vechicals-services3/vechicals-services3.component';
import { Landingpage9Component } from './landingpage9/landingpage9.component';
import { AboutParkway4Component } from './about-parkway4/about-parkway4.component';
import { ShowingcarsComponent } from './showingcars/showingcars.component';
import {NewVehicleOffersComponent} from './New Vehicle Offers/new-vehicle-offers.component';
import { Landingpage10Component } from './landingpage10/landingpage10.component';
import { Landingpage13Component } from './landingpage13/landingpage13.component';
import { Landingpage14Component } from './landingpage14/landingpage14.component';
import { Landingpage19Component } from './landingpage19/landingpage19.component';
import { Landingpage20Component } from './landingpage20/landingpage20.component';
import { Landingpage12Component } from './landingpage12/landingpage12.component';
import { Landingpage11Component } from './landingpage11/landingpage11.component';
import { Landingpage22Component } from './landingpage22/landingpage22.component';
import { Landingpage23Component } from './landingpage23/landingpage23.component';
import { Landingpage25Component } from './landingpage25/landingpage25.component';
import { Banner4Component } from './banner4/banner4.component';
import { Banner5Component } from './banner5/banner5.component';
import { Banner6Component } from './banner6/banner6.component';
import { Banner7Component } from './banner7/banner7.component';
import { Banner8Component } from './banner8/banner8.component';
import { Landingpage15Component } from './landingpage15/landingpage15.component';
import { Landingpage26Component } from './landingpage26/landingpage26.component';
import { Landingpage27Component } from './landingpage27/landingpage27.component';
import { CareersComponent } from './careers/careers.component';
import { PicantoenquiryComponent } from './picantoenquiry/picantoenquiry.component';
import { Financedetail1Component } from './financedetail-1/financedetail-1.component';



import { Template15Component } from './template-15/template-15.component';









@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Landingpage1Component,Header3Component,Header4Component,HeaderComponent,Header2Component,Landingpage20Component,Template15Component,Landingpage2Component,NewVehicleOffersComponent,Landingpage3Component,Landingpage4Component,Landingpage5Component,Landingpage6Component,Landingpage7Component,EnquiryComponent,Landingpage8Component,Landingpage9Component,Landingpage10Component,Landingpage13Component,Landingpage15Component,Landingpage22Component, Landingpage23Component,Landingpage25Component ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
