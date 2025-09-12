import { Component } from '@angular/core';
import { Footer1Component } from '../footer1/footer1.component';
import { Header3Component } from '../header3/header3.component';
import { ShowingcarsComponent } from '../showingcars/showingcars.component';

@Component({
  selector: 'app-landingpage11',
  standalone: true,
  imports: [Footer1Component,Header3Component,ShowingcarsComponent],
  templateUrl: './landingpage11.component.html',
  styleUrl: './landingpage11.component.css'
})
export class Landingpage11Component {

}
