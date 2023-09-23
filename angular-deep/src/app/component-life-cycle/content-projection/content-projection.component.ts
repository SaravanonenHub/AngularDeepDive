import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  template: `
  <app-zippy-singleslot>
    <p #pSingleShot>Let's learn about content projection via Single-shot projection</p>
    <ng-template #pTemplate>
      Let's learn about content projection via Single-shot projection -ng-Template.
    </ng-template>
  </app-zippy-singleslot>
    <app-zippy-multislot>
      <p question>
        Is content projection cool?
      </p>
      <p>Let's learn about content projection!</p>
    </app-zippy-multislot>
    <h2>Here's a zippy</h2>
    <app-example-zippy>
      <button appExampleZippyToggle>Is content projection cool?</button>
      <ng-template appExampleZippyContent>
        It depends on what you do with it.
      </ng-template>
    </app-example-zippy>
  `,
  styles: [
  ]
})
export class ContentProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
