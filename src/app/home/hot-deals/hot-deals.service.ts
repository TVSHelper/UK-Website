import {Injectable} from '@angular/core';

export interface DealModel {
  id: number;
  image: string;
  title: string;
  category: string;
  summary: string;
  price: number;
  perTicket?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HotDealsService {
  deals: DealModel[] = [
    {
      id: 1,
      image: 'london-bridge.png',
      title: 'London Bridge',
      category: 'Sightseeing',
      summary: 'Enjoy a day at the iconic London Bridge.',
      price: 80,
      perTicket: true
    },
    {
      id: 2,
      image: 'man-city-VS-liverpool.png',
      title: 'Man City VS Liverpool',
      category: 'Premier League',
      summary: 'The Egyptian King face to face with the Egyptian Prince in the English Classico!',
      price: 180,
      perTicket: true
    },
    {
      id: 3,
      image: 'windsor-castle.png',
      title: 'Windsor Castle',
      category: 'Historic',
      summary: 'Step into British history at Windsor Castle.',
      price: 75
    }
  ];
}
