import { Directive, ElementRef, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggerService } from './logger.service';
let nextId = 1;
@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit,OnDestroy {
  private id=nextId++;
  
  constructor(private logger:LoggerService,public element:ElementRef) { this.element.nativeElement.style.backgroundColor = 'yellow';}
  ngOnInit(): void {
    this.logger.log(`Spy #${this.id} onInit`);
  }
  ngOnDestroy(): void {
    this.logger.log(`Spy #${this.id} onDestroy`);
  }

}
