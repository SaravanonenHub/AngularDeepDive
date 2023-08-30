import { Component, Input, OnInit } from '@angular/core';
import { hero } from './heros';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says,</h3>
    <p>I {{hero.name}}, am at your service, {{masterName}} </p>
  `,
  styles: [
  ]
})
export class HeroChildComponent {

  @Input() hero!:hero
  @Input('master') masterName = '';

}
