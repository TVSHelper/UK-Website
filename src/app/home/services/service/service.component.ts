import {Component, OnInit, OnDestroy, HostListener, inject} from '@angular/core';
import { ServicesService } from '../Services.service';
import { Subscription, interval } from 'rxjs';
import {ServiceModel} from '../Service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit, OnDestroy {
  services: ServiceModel[] = [];

  private timerSubscription: Subscription | undefined;
  private readonly slideInterval = 3000;
  private readonly servicesService: ServicesService = inject(ServicesService);


  ngOnInit(): void {
    this.services = this.servicesService.services;
    this.startTimer();
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.clearTimer();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.startTimer();
  }

  prev(): void {
    this.clearTimer();
    const last = this.services.pop();
    if (last) this.services.unshift(last);
    this.startTimer(); // Start it again
  }

  next(): void {
    this.clearTimer();
    const first = this.services.shift();
    if (first) this.services.push(first);
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private startTimer(): void {
    this.timerSubscription = interval(this.slideInterval).subscribe(() => {
      this.next();
    });
  }

  private clearTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
