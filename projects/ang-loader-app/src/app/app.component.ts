import { Component, OnInit } from '@angular/core';
import { AngLoaderService } from 'ang-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-loader-app';

  constructor(private loader: AngLoaderService) {}

  ngOnInit() {
    this.loader.show();
  }
}
