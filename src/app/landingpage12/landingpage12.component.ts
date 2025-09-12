import { Component } from '@angular/core';
import { Footer1Component } from '../footer1/footer1.component';
import { Showingcars2Component } from '../showingcars2/showingcars2.component';
import { Header3Component } from '../header3/header3.component';

@Component({
  selector: 'app-landingpage12',
  standalone: true,
  imports: [Footer1Component,Showingcars2Component,Header3Component],
  templateUrl: './landingpage12.component.html',
  styleUrl: './landingpage12.component.css'
})
export class Landingpage12Component {

}
