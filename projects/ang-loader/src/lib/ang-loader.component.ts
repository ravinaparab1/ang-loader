import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngLoaderService } from './ang-loader.service';

@Component({
  selector: 'lib-ang-loader',
  templateUrl: './ang-loader.component.html',
  styleUrls: ['./ang-loader.component.css']
})
export class AngLoaderComponent implements OnInit, OnDestroy {

  show = false;
  private subscription: any;
  constructor(
    private loaderService: AngLoaderService
  ) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderSubject
      .subscribe((show: any) => {
        this.show = show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
