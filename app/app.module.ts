import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { JobDetailComponent } from './app.job-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    JobDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }