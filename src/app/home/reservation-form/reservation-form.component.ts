import {Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {
  activeTab: 'car_rental' | 'tickets' | 'stays' = 'car_rental';
  reservationForm: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);

  constructor() {
    this.reservationForm = this.fb.group({
      destination: [''],
      checkInDate: [''],
      checkOutDate: ['']
    });
  }

  selectTab(tab: 'car_rental' | 'tickets' | 'stays'): void {
    this.activeTab = tab;
  }
}
