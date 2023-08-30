import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy-multislot',
  template: `
    <h2>Multishot projection</h2>
    <ng-content></ng-content>
    <ng-content select="[question]"></ng-content>
  `,
  styles: [
  ]
})
export class ZippyMultislotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
