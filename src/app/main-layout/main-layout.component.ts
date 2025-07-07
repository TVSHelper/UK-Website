import { Component } from '@angular/core';
import {NavBarComponent} from '../home/nav-bar/nav-bar.component';
import {RouterOutlet} from '@angular/router';
import {ContactsComponent} from '../home/contacts/contacts.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    NavBarComponent,
    RouterOutlet,
    ContactsComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
