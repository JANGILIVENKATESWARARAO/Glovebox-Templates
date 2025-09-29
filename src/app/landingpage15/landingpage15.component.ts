import { Component } from '@angular/core';
import { PoloGTIComponent } from '../polo-gti/polo-gti.component';
import { Header3Component } from '../header3/header3.component';
import { Footer2Component } from '../footer2/footer2.component';
import { Financedetail1Component } from '../financedetail-1/financedetail-1.component';

@Component({
  selector: 'app-landingpage15',
  standalone: true,
  imports: [Header3Component,PoloGTIComponent,Footer2Component,Financedetail1Component],
  templateUrl: './landingpage15.component.html',
  styleUrl: './landingpage15.component.css'
})
export class Landingpage15Component {

}
