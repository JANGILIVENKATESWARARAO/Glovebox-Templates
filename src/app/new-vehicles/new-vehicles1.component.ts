import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer1Component } from '../footer1/footer1.component';
import { Header3Component } from '../header3/header3.component';
@Component({
  selector: 'app-new-vehicles1',
  standalone: true,
  imports: [CommonModule,Footer1Component,Header3Component],
  templateUrl: './new-vehicles1.component.html',
  styleUrls: ['./new-vehicles1.component.css']
})
export class NewVehicles1Component {
  mediaItems: { type: string, src: string | SafeResourceUrl }[] = [];

  currentIndex = 0;

  constructor(private sanitizer: DomSanitizer) {
    
  }

 prev() {
    console.log('prev clicked');
    this.currentIndex--;
  }

  next() {
    console.log('next clicked');
    this.currentIndex++;
  }
}
