import {Component, EventEmitter, HostBinding, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';

export interface CarSearchCriteriaModel {
  pickupLocation: string;
  dropOffLocation: string;
  pickupDate: string;
  pickupTime: string;
  tripType?: 'roundTrip' | 'oneWay';
  passengers?: number;
  luggage?: number;
}

@Component({
  selector: 'app-search-bar',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() searchPerformed: EventEmitter<CarSearchCriteriaModel> =
    new EventEmitter<CarSearchCriteriaModel>();

  searchForm: FormGroup;
  passengersOptions: number[] = [1, 2, 3, 4, 5, 6];
  luggageOptions: number[] = [0, 1, 2, 3, 4, 5];
  showLessOptions = false;

  constructor() {
    this.searchForm = new FormGroup({
      pickupLocation: new FormControl('Heathrow Terminal 1'),
      dropOffLocation: new FormControl('Kingston Upon Thames'),
      pickupDate: new FormControl('2025-06-10'), // YYYY-MM-DD for <input type="date">
      pickupTime: new FormControl('18:35'),     // HH:MM for <input type="time">
      tripType: new FormControl(null),      // Default value for radio
      passengers: new FormControl(null),           // Default value for select
      luggage: new FormControl(null)               // Default value for select
    });
  }

  onFindRide(): void {
    // this.carsService.triggerSearch();
    // if (this.searchForm.valid) {
    //   this.searchPerformed.emit(this.searchForm.value);
    // }
    this.searchPerformed.emit(this.searchForm.value);
  }

  swapLocations(): void {
    const currentPickup = this.searchForm.get('pickupLocation')?.value;
    const currentDropOff = this.searchForm.get('dropOffLocation')?.value;

    this.searchForm.get('pickupLocation')?.setValue(currentDropOff);
    this.searchForm.get('dropOffLocation')?.setValue(currentPickup);
  }

  toggleLessOptions(): void {
    this.showLessOptions = !this.showLessOptions;
  }

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.showLessOptions;
  }
}
