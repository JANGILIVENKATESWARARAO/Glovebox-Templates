import { Component } from '@angular/core';
import { Footer2Component } from '../footer2/footer2.component';
import { Header3Component } from '../header3/header3.component';

@Component({
  selector: 'app-polo-gti',
  standalone: true,
  imports: [Footer2Component,Header3Component],
  templateUrl: './polo-gti.component.html',
  styleUrl: './polo-gti.component.css'
})
export class PoloGTIComponent {

}
