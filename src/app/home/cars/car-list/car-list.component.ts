import {Component, input, InputSignal} from '@angular/core';
import {CarComponent} from '../car/car.component';
import {CarModel} from '../car.model';

@Component({
  selector: 'app-car-list',
  imports: [
    CarComponent
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
  cars: InputSignal<CarModel[]> = input.required<CarModel[]>();
}
