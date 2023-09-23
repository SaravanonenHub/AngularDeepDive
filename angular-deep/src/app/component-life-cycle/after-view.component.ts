import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildViewsComponent } from './child-views.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'after-view',
  template: `
     <div>child view begins</div>
      <app-child-view></app-child-view>
    <div>child view ends</div>

    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `,

})
export class AfterViewComponent implements AfterViewInit,AfterViewChecked{
  comment = ''
  private preHero='';
  @ViewChild(ChildViewsComponent) viewChild!:ChildViewsComponent;
  constructor(private logger:LoggerService) { 
    this.logIt('AfterView constructor');
  }
 

  ngAfterViewInit(): void {
    this.doSomething();
    this.logIt('AfterView Init');
  }
  ngAfterViewChecked(): void {
    if(this.preHero === this.viewChild.hero){
      this.logIt('AfterView checked (no change)');
    }
    else{
      this.preHero = this.viewChild.hero;
      this.logIt('Afterview checked');
      this.doSomething();
    }
  }

  private doSomething(){
    
    const c = this.viewChild.hero.length > 10 ? `That's a long name`:'';
    if(c !== this.comment){
        this.logger.tick_then(() => this.comment =c);
    }
  }
  logIt(method:string)
  {
    const child = this.viewChild;
    const message = `${method}:${child? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
}
