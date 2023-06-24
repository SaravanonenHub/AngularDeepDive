import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-parent',
  templateUrl: './custom-parent.component.html',
  styleUrls: ['./custom-parent.component.scss']
})
export class CustomParentComponent implements OnInit {

  constructor() { }
  inputToChild: string = 'Hi From Parent';
  ngOnInit(): void {
  }
  onChildEvent(event: any) {
    console.log(event);
  }
}
