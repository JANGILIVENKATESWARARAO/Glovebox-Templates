import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer1Component } from '../footer1/footer1.component';
import { Header4Component } from '../header4/header4.component';
@Component({
  selector: 'app-new-vehicle-offers',
  standalone: true,
  imports: [CommonModule,Footer1Component,Header4Component],
  templateUrl: './new-vehicle-offers.component.html',
  styleUrls: ['./new-vehicle-offers.component.css']
})
export class NewVehicleOffersComponent {
  mediaItems: { type: string, src: string | SafeResourceUrl }[] = [];

  currentIndex = 0;

  constructor(private sanitizer: DomSanitizer) {
    
  }
}
