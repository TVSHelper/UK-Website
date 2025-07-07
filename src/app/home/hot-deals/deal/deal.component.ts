import {Component, computed, inject, OnInit, OnDestroy, HostListener, signal} from '@angular/core';
import { DealModel, HotDealsService } from '../hot-deals.service';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-deal',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit, OnDestroy {
  private hotDealsService = inject(HotDealsService);
  deals = signal<DealModel[]>([]);
  currentIndex = signal(1);

  private timerSubscription: Subscription | undefined;
  private readonly slideInterval = 3000;

  visibleDeals = computed(() => {
    const allDeals = this.deals();
    if (allDeals.length < 3) {
      return allDeals; // Handle cases with fewer than 3 deals
    }
    const focusedIndex = this.currentIndex();
    const totalDeals = allDeals.length;
    const prevIndex = (focusedIndex - 1 + totalDeals) % totalDeals;
    const nextIndex = (focusedIndex + 1) % totalDeals;
    return [
      allDeals[prevIndex],
      allDeals[focusedIndex],
      allDeals[nextIndex],
    ];
  });

  ngOnInit() {
    this.deals.set(this.hotDealsService.deals);
    this.startTimer(); // Start the timer when the component loads
  }

  private startTimer(): void {
    this.clearTimer();
    this.timerSubscription = interval(this.slideInterval).subscribe(() => {
      this.next();
    });
  }

  private clearTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
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
    this.currentIndex.update(current =>
      current === 0 ? this.deals().length - 1 : current - 1
    );
    this.startTimer();
  }

  next(): void {
    this.clearTimer();
    this.currentIndex.update(current =>
      current === this.deals().length - 1 ? 0 : current + 1
    );
    this.startTimer();
  }

  ngOnDestroy() {
    this.clearTimer();
  }
}
