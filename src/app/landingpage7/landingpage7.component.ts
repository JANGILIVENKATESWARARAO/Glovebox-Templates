import { Component } from '@angular/core';
import { Header3Component } from '../header3/header3.component';
import { PicantohomeComponent } from '../picantohome/picantohome.component';
import { TermsandconditionsComponent } from '../termsandconditions/termsandconditions.component';
import { PicantoOptionsAvailableComponent } from '../picanto-options-available/picanto-options-available.component';
import { Footer4Component } from '../footer4/footer4.component';

@Component({
  selector: 'app-landingpage7',
  standalone: true,
  imports: [Header3Component,PicantohomeComponent,PicantoOptionsAvailableComponent,TermsandconditionsComponent,Footer4Component],
  templateUrl: './landingpage7.component.html',
  styleUrl: './landingpage7.component.css'
})
export class Landingpage7Component {

}
