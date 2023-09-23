import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from './hero';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'on-changes',
  template: `
   <div class="info">
    <p>{{hero.name}} can {{power}}</p>

    <h3>Change Log</h3>
    <div *ngFor="let chg of changeLogs" class="log">{{chg}}</div>
  </div>
  `,
  styles: [
  ]
})
export class OnChangesComponent implements OnInit,OnChanges {
  @Input() hero!:Hero;
  @Input() power='';
  changeLogs:string[]=[];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for(const propName in changes){
      const chng = changes[propName];
      const currValue = JSON.stringify(chng.currentValue);
      const prevValue = JSON.stringify(chng.previousValue);
      this.changeLogs.push(`${propName}: currentValue = ${currValue}, previousValue=${prevValue}`);
    }
  }
  ngOnInit(): void {
  }
  reset(){
    this.changeLogs = [];
  }
}
