import { Component } from '@angular/core';
import {RegisterFormComponent} from './register-form/register-form.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [
    RegisterFormComponent,
    NgOptimizedImage
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
