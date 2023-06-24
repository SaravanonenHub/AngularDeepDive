import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface ItemDetails {
  qty: number,
  rate: number,
  amount: number
}
@Component({
  selector: 'app-custom-child',
  templateUrl: './custom-child.component.html',
  styleUrls: ['./custom-child.component.scss']
})


export class CustomChildComponent implements OnInit {

  @Input() inputFromParent?: string;
  model?: ItemDetails[] = [];
  @Output() outputFromChild = new EventEmitter<any>();
  products?: any[]
  constructor() { }

  ngOnInit(): void {

  }
  onButtonClick() {

    const addRow = [
      { qty: 10, rate: 200, amount: 2000 },
      { qty: 20, rate: 200, amount: 4000 }
    ]
    this.outputFromChild.emit(addRow);
  }
}
