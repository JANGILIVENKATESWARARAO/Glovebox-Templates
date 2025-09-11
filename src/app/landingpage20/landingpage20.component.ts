import { Component } from '@angular/core';
import { WorkWithUsComponent } from '../work-with-us/work-with-us.component';
import { Header3Component } from '../header3/header3.component';
import { OurPerksComponent } from '../our-perks/our-perks.component';

@Component({
  selector: 'app-landingpage20',
  standalone: true,
  imports: [Header3Component,WorkWithUsComponent,OurPerksComponent ],
  templateUrl: './landingpage20.component.html',
  styleUrl: './landingpage20.component.css'
})
export class Landingpage20Component {

}
