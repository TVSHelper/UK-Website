import {Component, input, InputSignal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CarModel} from '../car.model';

@Component({
  selector: 'app-car',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent {
  car: InputSignal<CarModel> = input.required<CarModel>();
}
