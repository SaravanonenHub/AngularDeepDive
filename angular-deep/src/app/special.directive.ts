import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highLight]'
})
export class SpecialDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

}
