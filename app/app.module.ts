import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JobDetailComponent } from './app.job-detail.component';
import { DemoDetailComponent } from './app.demo-detail.component';
import { AboutMeComponent } from './app.about-me.component';
import { NavigationComponent } from './app.navigation.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    JobDetailComponent,
    DemoDetailComponent,
    AboutMeComponent,
    NavigationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }