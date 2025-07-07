import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CarsService {
  private searchTriggeredSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public searchTriggered$ = this.searchTriggeredSource.asObservable();

  // public triggerSearch(): void {
  //   this.searchTriggeredSource.next(true);
  // }
}
