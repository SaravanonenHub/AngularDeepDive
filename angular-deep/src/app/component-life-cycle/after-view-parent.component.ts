import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-after-view-parent',
  template: `
  <h2>AfterView</h2>

  <after-view  *ngIf="show"></after-view>

  <div class="info">
    <h3>AfterView Logs</h3>
    <button type="button" (click)="reset()">Reset</button>
    <div *ngFor="let msg of logger.logs" class="log">{{msg}}</div>
  </div>
  `,
 providers: [LoggerService]
})
export class AfterViewParentComponent  {
  show = true;
  constructor(public logger:LoggerService) { }

  reset(){
    this.logger.clear();
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

}
