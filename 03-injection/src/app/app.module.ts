import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CarModule } from './car/car.module';
import { PSAModule } from './psa/psa.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    CarModule,
    PSAModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
