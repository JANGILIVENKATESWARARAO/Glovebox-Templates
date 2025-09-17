import { Component } from '@angular/core';
import { WorkWithUsComponent } from '../work-with-us/work-with-us.component';
import { Header3Component } from '../header3/header3.component';
import { OurPerksComponent } from '../our-perks/our-perks.component';
import { ParkwayVolkswagen2Component } from '../parkway-volkswagen2/parkway-volkswagen2.component';
import { Faq4Component } from '../faq4/faq4.component';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-landingpage20',
  standalone: true,
  imports: [Header3Component,WorkWithUsComponent,OurPerksComponent,ParkwayVolkswagen2Component,Faq4Component,Footer2Component],
  templateUrl: './landingpage20.component.html',
  styleUrl: './landingpage20.component.css'
})
export class Landingpage20Component {

}
