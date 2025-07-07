import { Component } from '@angular/core';
import {DealComponent} from './deal/deal.component';

@Component({
  selector: 'app-hot-deals',
  imports: [
    DealComponent
  ],
  templateUrl: './hot-deals.component.html',
  styleUrl: './hot-deals.component.scss'
})
export class HotDealsComponent {

}
