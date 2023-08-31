import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy-singleslot',
  template: `
   <h2>Single Shot</h2>
   <div *ngIf="content">
    <ng-content></ng-content>
   </div>
  `,
  styles: [
  ]
})
export class ZippySingleslotComponent implements AfterContentInit {

  content=false;
  @ContentChild('pTemplate') contentView!:any
  constructor() { }
  ngAfterContentInit(): void {
    console.log(this.contentView);
  }
}
