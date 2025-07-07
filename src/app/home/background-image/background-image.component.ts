import {Component, computed, effect, signal, OnDestroy, Injector, input, inject} from '@angular/core';

interface Slide {
  url: string;
  title: string;
  buttonText: string;
}

@Component({
  selector: 'app-background-image',
  standalone: true,
  imports: [],
  templateUrl: './background-image.component.html',
  styleUrl: './background-image.component.scss'
})
export class BackgroundImageComponent implements OnDestroy {
  staticImage = input<string | null>(null);
  private injector: Injector = inject(Injector);

  slides: Slide[] = [
    {
      url: '/assets/home/background/1.jpg',
      title: 'VIP experiences, first-class service, and unforgettable journeys await!',
      buttonText: 'Book a Luxury Experience'
    },
    {
      url: '/assets/home/background/london-home.png',
      title: 'Discover the Hidden Gems of the Scottish Highlands',
      buttonText: 'Explore Scotland Tours'
    },
    {
      url: '/assets/home/background/2.jpg',
      title: 'Experience the Magic of the Orient Express',
      buttonText: 'Reserve Your Cabin'
    },
    {
      url: '/assets/home/background/3.jpg',
      title: 'A New Adventure is Calling Your Name',
      buttonText: 'Answer the Call'
    },
    {
      url: '/assets/home/background/4.jpg',
      title: 'Luxury Travel, Redefined for the Modern Explorer',
      buttonText: 'Begin Your Journey'
    },
  ];

  currentIndex = signal(0);

  currentSlide = computed(() => this.slides[this.currentIndex()]);


  private timeoutId?: number;

  constructor() {
    this.initializeTimerEffect();
  }

  private initializeTimerEffect(): void {
    effect(() => {
      window.clearTimeout(this.timeoutId);

      this.timeoutId = window.setTimeout(() => this.goToNext(), 4000);

    }, { injector: this.injector });
  }

  goToNext(): void {
    this.currentIndex.update(current =>
      current === this.slides.length - 1 ? 0 : current + 1
    );
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex.set(slideIndex);
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.timeoutId);
  }
}
