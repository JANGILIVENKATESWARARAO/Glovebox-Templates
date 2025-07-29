import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { Header4Component } from './header4/header4.component';
import { Page1Component } from './page1/page1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FindYourCar1Component } from './find-your-car1/find-your-car1.component';
import { FindYourCar2Component } from './find-your-car-2/find-your-car-2.component';
import { TrustedBrand1Component } from './trusted-brand-1/trusted-brand-1.component';
import { TrustedBrand2Component } from './trusted-brand-2/trusted-brand-2.component';
import { VehicalsServices1Component } from './vehicals-services-1/vehicals-services-1.component';
import { app } from '../../server';
import { AboutParkway1Component } from './about-parkway-1/about-parkway-1.component';
import { MobilityService1Component } from './mobility-service-1/mobility-service-1.component';
import { VechicalServices2Component } from './vechical-services-2/vechical-services-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,Header2Component,Header3Component,Header4Component,Page1Component, FontAwesomeModule,FindYourCar1Component,FindYourCar2Component,TrustedBrand1Component,TrustedBrand2Component,VehicalsServices1Component,AboutParkway1Component,MobilityService1Component,VechicalServices2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
