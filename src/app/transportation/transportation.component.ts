import {Component, signal} from '@angular/core';
import {BackgroundImageComponent} from '../home/background-image/background-image.component';
import {CarSearchCriteriaModel, SearchBarComponent} from '../home/search-bar/search-bar.component';
import {HotDealsComponent} from '../home/hot-deals/hot-deals.component';
import {CarListComponent} from '../home/cars/car-list/car-list.component';
import {CarModel} from '../home/cars/car.model';

@Component({
  selector: 'app-transportation',
  imports: [
    BackgroundImageComponent,
    SearchBarComponent,
    HotDealsComponent,
    CarListComponent
  ],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.scss'
})
export class TransportationComponent {
  carResults = signal<CarModel[]>([]);
  searchTriggered = signal(false);

  handleSearch(searchCriteria: CarSearchCriteriaModel) {
    console.log('Search performed with criteria:', searchCriteria);

    const mockResults: CarModel[] = [
      {
        image: 'car1.png',
        title: 'Saloon car',
        passengers: 4,
        luggage: 3
      },
      {
        image: 'car2.png',
        title: 'VIP Executive',
        passengers: 4,
        luggage: 3
      },
      {
        image: 'car3.png',
        title: 'Mercedes V Class',
        passengers: 4,
        luggage: 3
      },
      {
        image: 'car4.png',
        title: 'MVP car',
        passengers: 4,
        luggage: 3
      },
      {
        image: 'car5.png',
        title: 'MVP+ car',
        passengers: 4,
        luggage: 3
      }
    ];

    this.carResults.set(mockResults);
    this.searchTriggered.set(true);
  }

}
