import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesPageComponent } from './movies/movies-page/movies-page.component';
import { FibonacciComponent } from './fibonacci/fibonacci/fibonacci.component';

const routes: Routes = [

  {
    path: '',
    component: MoviesPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'fibonacci',
    component: FibonacciComponent
  },
  {
    path: "**",
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
