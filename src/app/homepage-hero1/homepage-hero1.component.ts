import { Component } from '@angular/core';
import { UsedCars1Component } from '../used-cars1/used-cars1.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage-hero1',
  standalone: true,
  imports: [UsedCars1Component,CommonModule],
  templateUrl: './homepage-hero1.component.html',
  styleUrl: './homepage-hero1.component.css'
})
export class HomepageHero1Component {

}
