import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngLoaderService {

  public loaderSubject = new BehaviorSubject<any>(false);

  show() {
   this.loaderSubject.next(true);
  }

  hide() {
    this.loaderSubject.next(false);
  }
}
