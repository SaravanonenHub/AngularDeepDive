import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view',
  template: `
    <label for="hero-name">Hero name: </label>
    <input type="text" id="hero-name" [(ngModel)]="hero">
  `,
  styles: [
  ]
})
export class ChildViewsComponent  {

  hero='Vijay'

}
