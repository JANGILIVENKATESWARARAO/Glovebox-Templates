import { Component } from '@angular/core';
import { CareersComponent } from '../careers/careers.component';
import { Header3Component } from '../header3/header3.component';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-landingpage21',
  standalone: true,
  imports: [Header3Component,CareersComponent,Footer2Component],
  templateUrl: './landingpage21.component.html',
  styleUrl: './landingpage21.component.css'
})
export class Landingpage21Component {

}
