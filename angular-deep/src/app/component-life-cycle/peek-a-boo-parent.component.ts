import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-peek-a-boo-parent',
  template: `
    <p>
      peek-a-boo-parent works!
    </p>
    <button type="button" (click)="toggleChild()">
      PeekABooComponent
    </button>
    <button type="button" (click)="chumma()">
      Chummaa
    </button>
    <input type="text" id="hero-name" [(ngModel)]="heroName">
    <div class="info">
      <app-peek-a-boo *ngIf="hasChild" [name]="heroName"></app-peek-a-boo>

      <h3>Lifecycle Hook Log</h3>
      <div *ngFor="let msg of hookLog" class="log">{{msg}}

      </div>
    </div>
  `,
  styles: [
  ]
})
export class PeekABooParentComponent implements OnInit {
  hasChild = false;
  hookLog:string[]=[]
  heroName = 'Windstorm';
  private logger: LoggerService;
  constructor(private loggerService:LoggerService) {
    this.logger = loggerService;
    this.hookLog = loggerService.logs;
    console.log(`HookLog on constructor: ${this.hookLog}`)
   }

  ngOnInit(): void {
  }
  toggleChild(){
    debugger;
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }
  chumma(){

  }
}
