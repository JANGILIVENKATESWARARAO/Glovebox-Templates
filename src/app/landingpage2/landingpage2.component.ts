import { Component } from '@angular/core';
import { Header3Component } from '../header3/header3.component';
import { Banner3Component } from '../banner3/banner3.component';
import { FindYourCar1Component } from '../find-your-car1/find-your-car1.component';
import { TrustedBrand2Component } from '../trusted-brand-2/trusted-brand-2.component';
import { Motability2Component } from '../motability2/motability2.component';
import { VechicalServices2Component } from '../vechical-services-2/vechical-services-2.component';
import { AboutParkway2Component } from '../about-parkway-2/about-parkway-2.component';
import { Footer2Component } from '../footer2/footer2.component';
import { TrustedBrand1Component } from '../trusted-brand-1/trusted-brand-1.component';
import { AboutParkway1Component } from '../about-parkway-1/about-parkway-1.component';
import { Footer3Component } from '../footer3/footer3.component';

@Component({
  selector: 'app-landingpage2',
  standalone: true,
  imports: [Header3Component,Banner3Component,TrustedBrand1Component,Motability2Component,VechicalServices2Component,AboutParkway2Component,Footer3Component],
  templateUrl: './landingpage2.component.html',
  styleUrl: './landingpage2.component.css'
})
export class Landingpage2Component {

}
