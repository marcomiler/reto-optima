import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
})
export class FibonacciComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  totalSerie: number[] = [];

  search(){

    const value = this.txtSearch.nativeElement.value;

    if( value.trim().length === 0 ){
      return;
    }
    if (!Number(value)){
      return;
    }
      const intValue = Number(value);
      this.totalSerie = this.fibonacciFn(intValue);

  }


  fibonacciFn(numero: number = 0): number[]{
    let numeros=[0,1];
    for (let i = 2; i < numero; i++) {
      numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
  }

  constructor() { }

}
