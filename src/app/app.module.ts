import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CarComponent } from './car/car.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { HomeComponent } from './home/home.component'
import { NguCarouselModule } from '@ngu/carousel';

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
    CarComponent,
    CarDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
