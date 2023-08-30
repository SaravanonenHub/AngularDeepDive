import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
    <h1>Master controls {{names.length}} names</h1>
    <app-name-child *ngFor="let hero of names" [name]="hero"></app-name-child>
  `,
  styles: [
  ]
})
export class NameParentComponent  {

  names = ['Vijay   ','  ', 'Kamal', 'Ranjini'];

}
