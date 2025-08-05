import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trusted-brand-2',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './trusted-brand-2.component.html',
  styleUrl: './trusted-brand-2.component.css'
})
export class TrustedBrand2Component {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  logos = [
    { src: 'Logoes/image-1.png', alt: 'Toyota Logo' },
    { src: 'Logoes/image-2.png', alt: 'Nissan Logo' },
    { src: 'Logoes/image-3.png', alt: 'Audi Logo' },
    { src: 'Logoes/image-4.png', alt: 'Skoda Logo' },
    { src: 'Logoes/image-5.png', alt: 'Volkswagen Logo' },
    { src: 'Logoes/image-6.png', alt: 'KIA Logo' },
    { src: 'Logoes/image-12.png', alt: 'BMW Logo' },
    { src: ' Logoes/image-11.png', alt: 'Hyundai Logo' },
    { src: ' Logoes/image-7.png', alt: 'Audi Logo' },
    { src: ' Logoes/image-8.png', alt: 'Skoda Logo' },
    { src: ' Logoes/image-9.png', alt: 'Volkswagen Logo' },
    { src: ' Logoes/image-10.png', alt: 'KIA Logo' },
    
    

   
  ];

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
