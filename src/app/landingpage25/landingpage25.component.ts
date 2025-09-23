import { Component } from '@angular/core';
import { VolkswagenPoloComponent } from '../volkswagen-polo/volkswagen-polo.component';
import { Header3Component } from '../header3/header3.component';
import { FinanceDetails2Component } from '../finance-details2/finance-details2.component';
import { VechicalDetailsComponent } from '../vechical-details/vechical-details.component';
import { NewAvailableModelsComponent } from '../new-available-models/new-available-models.component';
import { UsedCarsComponent } from '../used-cars/used-cars.component';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-landingpage25',
  standalone: true,
  imports: [Header3Component,VolkswagenPoloComponent,FinanceDetails2Component,VechicalDetailsComponent,NewAvailableModelsComponent,UsedCarsComponent,Footer2Component],
  templateUrl: './landingpage25.component.html',
  styleUrl: './landingpage25.component.css'
})
export class Landingpage25Component {

}
