import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngLoaderModule } from 'ang-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngLoaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
