import { Injectable } from "@angular/core";
import {ServiceModel} from './Service.model';

@Injectable({providedIn: 'root'})
export class ServicesService {
  services: ServiceModel[] =  [
    {
      id: 1,
      image: 'activities.jpg',
      title: 'Activities',
      summary: 'Enjoy a day at the iconic London Bridge.',
    },
    {
      id: 2,
      image: 'transport.jpg',
      title: 'Transportation',
      summary: 'The Egyptian King face to face with the Egyptian Prince in the English Classico!',
    },
    {
      id: 3,
      image: 'accommodation.jpg',
      title: 'Accommodation',
      summary: 'Our trusted partners provide a very high standard options of accommodation.',
    },
    {
      id: 4,
      image: 'luxury-travel.jpg',
      title: 'Luxury Travel',
      summary: 'Step into British history at Windsor Castle.',
    },
    {
      id: 5,
      image: 'event-tickets.jpg',
      title: 'Event Tickets',
      summary: 'Step into British history at Windsor Castle.',
    }
  ];
}
