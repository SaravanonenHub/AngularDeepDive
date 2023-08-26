import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PeekABooDirective } from './peek-a-boo.directive';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-peek-a-boo',
  template: `
    <p>
      peek-a-boo works!
    </p>
  `,
  styles: [
  ]
})
export class PeekABooComponent extends PeekABooDirective implements 
    OnChanges, OnInit, DoCheck
    ,AfterContentInit,AfterContentChecked
    ,AfterViewInit,AfterViewChecked
    ,OnDestroy{

  @Input() name ='';
  private verb = 'initialized';

  constructor(logger:LoggerService) {
    super(logger);
    const is = this.name ? 'is' :'is not';
    this.logIt(`name ${is} known at constructor`)
   }
   
  ngOnChanges(changes: SimpleChanges): void {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes['name'].currentValue;
        const prevName = changes['name'].previousValue;
        console.log(`Current value:${name} from previous value:${prevName}`)
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  ngDoCheck(): void {
    this.logIt('DoCheck'); 
  }
  ngAfterContentInit(): void {
    this.logIt('AfterContentInit'); 
  }
  ngAfterContentChecked(): void {
    this.logIt('AfterContentChecked'); 
  }
  ngAfterViewInit(): void {
    this.logIt('AfterViewInit'); 
  }
  ngAfterViewChecked(): void {
    this.logIt('AfterViewChecked'); 
  }
  ngOnDestroy(): void {
    this.logIt('Destroy'); 
  }
}
