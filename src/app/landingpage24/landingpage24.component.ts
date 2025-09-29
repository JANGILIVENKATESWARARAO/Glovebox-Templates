import { Component } from '@angular/core';
import { Financedetail1Component } from '../financedetail-1/financedetail-1.component';
import { Header3Component } from '../header3/header3.component';
import { VolkswagenPoloComponent } from '../volkswagen-polo/volkswagen-polo.component';
import { VechicalDetailsComponent } from '../vechical-details/vechical-details.component';
import { NewAvailableModelsComponent } from '../new-available-models/new-available-models.component';
import { UsedCarsComponent } from '../used-cars/used-cars.component';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-landingpage24',
  standalone: true,
  imports: [Financedetail1Component,Header3Component,VolkswagenPoloComponent,VechicalDetailsComponent,NewAvailableModelsComponent,UsedCarsComponent,Footer2Component],
  templateUrl: './landingpage24.component.html',
  styleUrl: './landingpage24.component.css'
})
export class Landingpage24Component {

}
