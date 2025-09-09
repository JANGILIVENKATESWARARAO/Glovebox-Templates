import { Component } from '@angular/core';
import { UsedCars1Component } from '../used-cars1/used-cars1.component';

@Component({
  selector: 'app-homepage-hero2',
  standalone: true,
  imports: [UsedCars1Component],
  templateUrl: './homepage-hero2.component.html',
  styleUrl: './homepage-hero2.component.css'
})
export class HomepageHero2Component {

}
