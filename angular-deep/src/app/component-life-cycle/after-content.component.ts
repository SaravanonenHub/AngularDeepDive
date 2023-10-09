import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';
import { ChildViewsComponent } from './child-views.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'after-content',
  template: `
  <div>projected content begins</div>
    <ng-content></ng-content>
  <div>projected content ends</div>
  <p *ngIf="comment" class="comment">
    {{comment}}
  </p>
`
})
export class AfterContentComponent implements  AfterContentChecked, AfterContentInit  {
  private prevHero = '';
  comment = '';
  @ContentChild(ChildViewsComponent) contentChild!:ChildViewsComponent;
  constructor(private logger:LoggerService) { 
    this.logIt('AfterContent Constructor');
  }
  
  ngAfterContentInit(): void {
    this.logIt('AfterContent Init');
    console.log(`Child Hero: ${this.contentChild.hero}`);
    this.doSomething();
  }
  ngAfterContentChecked(): void {
   if(this.prevHero === this.contentChild.hero)
   {
    this.logIt('AfterContentChecked (no change)');
   }
   else{
    this.prevHero = this.contentChild.hero;
    this.logIt('AfterContentChecked');
    this.doSomething();
   }
  }
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? "That's a long name" : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }

}
