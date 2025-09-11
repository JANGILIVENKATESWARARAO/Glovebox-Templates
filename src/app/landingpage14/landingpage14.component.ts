import { Component } from '@angular/core';
import { HomepageHero2Component } from '../homepage-hero2/homepage-hero2.component';
import { PerfectPartner2Component } from '../perfect-partner2/perfect-partner2.component';
import { Motability4Component } from '../motability4/motability4.component';
import { VechicalsServices3Component } from '../vechicals-services3/vechicals-services3.component';
import { VechicalsServices4Component } from '../vechicals-services4/vechicals-services4.component';
import { AboutParkway5Component } from '../about-parkway5/about-parkway5.component';
import { Footer2Component } from '../footer2/footer2.component';
import { Header3Component } from '../header3/header3.component';

@Component({
  selector: 'app-landingpage14',
  standalone: true,
  imports: [Header3Component,HomepageHero2Component,PerfectPartner2Component,Motability4Component,VechicalsServices4Component,AboutParkway5Component,Footer2Component],
  templateUrl: './landingpage14.component.html',
  styleUrl: './landingpage14.component.css'
})
export class Landingpage14Component {

}
