import { Component } from '@angular/core';
import { HomepageHero4Component } from '../homepage-hero4/homepage-hero4.component';
import { Header3Component } from '../header3/header3.component';
import { ParkwayVolkswagenComponent } from '../parkway-volkswagen/parkway-volkswagen.component';
import { ParkwayVolkswagen2Component } from '../parkway-volkswagen2/parkway-volkswagen2.component';
import { WhyWorkWithUs2Component } from '../why-work-with-us2/why-work-with-us2.component';
import { Faq3Component } from '../faq3/faq3.component';
import { Jobsandcareers1Component } from '../jobsandcareers1/jobsandcareers1.component';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-landingpage19',
  standalone: true,
  imports: [Header3Component,HomepageHero4Component,ParkwayVolkswagen2Component,WhyWorkWithUs2Component,Faq3Component,Jobsandcareers1Component,Footer2Component],
  templateUrl: './landingpage19.component.html',
  styleUrl: './landingpage19.component.css'
})
export class Landingpage19Component {

}
