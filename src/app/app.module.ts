import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { RandomCarsComponent } from './random-cars/random-cars.component';
import { RandomCarTwoComponent } from './random-car-two/random-car-two.component';
import { ReviewNewestCarComponent } from './review-newest-car/review-newest-car.component';
import { ShowColorsOfCarComponent } from './show-colors-of-car/show-colors-of-car.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SearchCarComponent,
    RandomCarsComponent,
    RandomCarTwoComponent,
    ReviewNewestCarComponent,
    ShowColorsOfCarComponent,
    FooterComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
