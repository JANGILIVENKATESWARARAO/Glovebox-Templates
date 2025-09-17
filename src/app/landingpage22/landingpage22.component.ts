import { Component } from '@angular/core';
import { Header3Component } from '../header3/header3.component';
import { NearestParkwayComponent } from '../nearest-parkway/nearest-parkway.component';
import { ParkwayVolkswagenLeicsterComponent } from '../parkway-volkswagen-leicster/parkway-volkswagen-leicster.component';
import { ParkwayVolkswagenDerbyComponent } from '../parkway-volkswagen-derby/parkway-volkswagen-derby.component';
import { ParkwayVolkswagenNorthamptonComponent } from '../parkway-volkswagen-northampton/parkway-volkswagen-northampton.component';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-landingpage22',
  standalone: true,
  imports: [Header3Component,NearestParkwayComponent,ParkwayVolkswagenLeicsterComponent,ParkwayVolkswagenDerbyComponent,ParkwayVolkswagenNorthamptonComponent,Footer2Component],
  templateUrl: './landingpage22.component.html',
  styleUrl: './landingpage22.component.css'
})
export class Landingpage22Component {

}
