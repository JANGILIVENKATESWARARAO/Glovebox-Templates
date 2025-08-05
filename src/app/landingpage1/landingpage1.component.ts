import { Component } from '@angular/core';
import { Header3Component } from '../header3/header3.component';
import { Banner2Component } from '../banner2/banner2.component';
import { FindYourCar1Component } from '../find-your-car1/find-your-car1.component';
import { TrustedBrand2Component } from '../trusted-brand-2/trusted-brand-2.component';
import { Motability1Component } from '../motability1/motability1.component';
import { VehicalsServices1Component } from '../vehicals-services-1/vehicals-services-1.component';
import { AboutParkway1Component } from '../about-parkway-1/about-parkway-1.component';
import { Footer1Component } from '../footer1/footer1.component';
import { Header4Component } from '../header4/header4.component';

@Component({
  selector: 'app-landingpage1',
  standalone: true,
  imports: [Header4Component,Banner2Component,FindYourCar1Component,TrustedBrand2Component,Motability1Component,VehicalsServices1Component,AboutParkway1Component,Footer1Component],
  templateUrl: './landingpage1.component.html',
  styleUrl: './landingpage1.component.css'
})
export class Landingpage1Component {

}
