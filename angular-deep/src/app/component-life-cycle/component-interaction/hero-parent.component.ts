import { Component, OnInit } from '@angular/core';
import { HEROES } from './heros';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>

    <app-hero-child *ngFor="let hero of heroes" [hero]="hero" [master]="master"></app-hero-child>
  `,
  styles: [
  ]
})
export class HeroParentComponent  {
  heroes=HEROES;
  master = 'Master';

}
