import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciComponent } from './fibonacci.component';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  exports: [
    FibonacciComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FibonacciModule { }
