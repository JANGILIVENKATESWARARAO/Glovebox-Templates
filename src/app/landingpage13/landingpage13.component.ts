import { Component } from '@angular/core';
import { UsedCars1Component } from '../used-cars1/used-cars1.component';
import { Motability3Component } from '../motability3/motability3.component';
import { PerfectPartner1Component } from '../perfect-partner1/perfect-partner1.component';
import { VechicalsServices3Component } from '../vechicals-services3/vechicals-services3.component';
import { AboutParkway4Component } from '../about-parkway4/about-parkway4.component';
import { Footer2Component } from '../footer2/footer2.component';
import { Header4Component } from '../header4/header4.component';
import { HomepageHero1Component } from '../homepage-hero1/homepage-hero1.component';
import { Header3Component } from '../header3/header3.component';

@Component({
  selector: 'app-landingpage13',
  standalone: true,
  imports: [Header3Component,HomepageHero1Component,PerfectPartner1Component,UsedCars1Component,Motability3Component,VechicalsServices3Component,AboutParkway4Component,Footer2Component],
  templateUrl: './landingpage13.component.html',
  styleUrl: './landingpage13.component.css'
})
export class Landingpage13Component {

}
