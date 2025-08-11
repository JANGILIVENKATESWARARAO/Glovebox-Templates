import { Component } from '@angular/core';
import { Faq2Component } from '../faq2/faq2.component';
import { JobsandcareersComponent } from '../jobsandcareers/jobsandcareers.component';
import { CareerBannerComponent } from '../career-banner/career-banner.component';
import { CareerComponent2Component } from '../career-component2/career-component2.component';
import { WhyWorkWithUsComponent } from '../why-work-with-us/why-work-with-us.component';
import { Footer1Component } from '../footer1/footer1.component';

@Component({
  selector: 'app-landingpage8',
  standalone: true,
  imports: [Faq2Component,JobsandcareersComponent,CareerBannerComponent,CareerComponent2Component,WhyWorkWithUsComponent,Footer1Component],
  templateUrl: './landingpage8.component.html',
  styleUrl: './landingpage8.component.css'
})
export class Landingpage8Component {

}
