import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { SearchCarComponent } from './search-car/search-car.component';

const routes: Routes = [
  { path: '', component: SearchCarComponent },
  { path: 'car-detail/:id', component: CarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
