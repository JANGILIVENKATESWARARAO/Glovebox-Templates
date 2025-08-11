import { Component } from '@angular/core';
import { Header4Component } from '../header4/header4.component';
import { NearestParkwayComponent } from '../nearest-parkway/nearest-parkway.component';
import { ParkwayVolkswagenComponent } from '../parkway-volkswagen/parkway-volkswagen.component';
import { EnquiryformComponent } from '../enquiryform/enquiryform.component';
import { Footer4Component } from '../footer4/footer4.component';
import { Footer1Component } from '../footer1/footer1.component';

@Component({
  selector: 'app-landingpage9',
  standalone: true,
  imports: [Header4Component,NearestParkwayComponent,ParkwayVolkswagenComponent,EnquiryformComponent,Footer1Component],
  templateUrl: './landingpage9.component.html',
  styleUrl: './landingpage9.component.css'
})
export class Landingpage9Component {

}
