import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CarsService {
  protected readonly searchTriggeredSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public searchTriggered$ = this.searchTriggeredSource.asObservable();

  // public triggerSearch(): void {
  //   this.searchTriggeredSource.next(true);
  // }
}
