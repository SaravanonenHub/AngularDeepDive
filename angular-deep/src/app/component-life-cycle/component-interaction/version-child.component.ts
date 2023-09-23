import { JsonPipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change logs</h4>
    <ul>
      <li *ngFor="let log of changeLogs">{{log}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class VersionChildComponent implements OnChanges {

  @Input() minor= 0;
  @Input() major = 0;
  changeLogs:string[]=[];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const log:string[]=[];
    for(const propName in changes){
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if(changedProp.isFirstChange()){
        log.push(`Initial value of ${propName} set to ${to}`);
      }
      else{
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} value changed from ${from} to ${to}`);
      }

      this.changeLogs.push(log.join(','));
    }
  }


}
