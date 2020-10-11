import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { SearchCarComponent } from './search-car/search-car.component';

const routes: Routes = [
  { path: '', component: SearchCarComponent },
  { path: 'car/:id', component: CarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
