import { Component } from '@angular/core';
import { Header3Component } from '../header3/header3.component';
import { Banner1Component } from '../banner1/banner1.component';
import { FindYourCar1Component } from '../find-your-car1/find-your-car1.component';
import { TrustedBrand1Component } from '../trusted-brand-1/trusted-brand-1.component';
import { Motability2Component } from '../motability2/motability2.component';
import { VehicalsServices1Component } from '../vehicals-services-1/vehicals-services-1.component';
import { AboutParkway1Component } from '../about-parkway-1/about-parkway-1.component';
import { Footer2Component } from '../footer2/footer2.component';
import { AboutParkway3Component } from '../about-parkway-3/about-parkway-3.component';

@Component({
  selector: 'app-landingpage3',
  standalone: true,
  imports: [Header3Component,Banner1Component,FindYourCar1Component,TrustedBrand1Component,Motability2Component,VehicalsServices1Component,AboutParkway3Component,Footer2Component],
  templateUrl: './landingpage3.component.html',
  styleUrl: './landingpage3.component.css'
})
export class Landingpage3Component {

}
