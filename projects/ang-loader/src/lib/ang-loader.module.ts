import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngLoaderComponent } from './ang-loader.component';

@NgModule({
  declarations: [AngLoaderComponent],
  imports: [
    BrowserModule
  ],
  exports: [AngLoaderComponent]
})
export class AngLoaderModule { }
