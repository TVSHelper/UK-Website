import {AfterViewInit, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {BackgroundImageComponent} from "./background-image/background-image.component";
import {HotDealsComponent} from "./hot-deals/hot-deals.component";
import {CarsService} from './cars/cars.service';
import {Subscription} from 'rxjs';
import {ServicesComponent} from './services/services.component';
import {ReservationFormComponent} from './reservation-form/reservation-form.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    BackgroundImageComponent,
    HotDealsComponent,
    ServicesComponent,
    ReservationFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  private fragmentSubscription: Subscription | undefined;
  private carsService: CarsService = inject(CarsService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngAfterViewInit(): void {
    this.fragmentSubscription = this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element: HTMLElement | null = document.getElementById(fragment);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 200);
        }
      }
    });
    }

  isCarListVisible = false;
  private searchSubscription!: Subscription;

  ngOnInit() {
    this.searchSubscription = this.carsService.searchTriggered$.subscribe(wasTriggered => {
      if (wasTriggered) {
        this.isCarListVisible = true;
      }
    });
  }


  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
  }
}
