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





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Landingpage1Component,Landingpage2Component,Landingpage3Component,Landingpage4Component,Landingpage5Component,Landingpage6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
