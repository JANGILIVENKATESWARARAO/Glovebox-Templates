import { Component } from '@angular/core';
import { ParkwayVolkswagenLeicster2Component } from '../parkway-volkswagen-leicster2/parkway-volkswagen-leicster2.component';
import { Header3Component } from '../header3/header3.component';
import { Footer2Component } from '../footer2/footer2.component';
import { NearestParkway2Component } from '../nearest-parkway2/nearest-parkway2.component';

@Component({
  selector: 'app-landingpage23',
  standalone: true,
  imports: [Header3Component,NearestParkway2Component,ParkwayVolkswagenLeicster2Component,Footer2Component],
  templateUrl: './landingpage23.component.html',
  styleUrl: './landingpage23.component.css'
})
export class Landingpage23Component {

}
