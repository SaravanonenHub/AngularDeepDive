import { AfterContentInit, Component, ContentChild, Directive, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
export interface ItemDetails {
  qty: number,
  rate: number,
  amount: number
}
@Directive({
  selector:'[pTemplateAccess]'
})
export class TemplateAcessDirective{
  constructor(public templateRef:TemplateRef<unknown>){}
}
@Component({
  selector: 'app-custom-child',
  templateUrl: './custom-child.component.html',
  styleUrls: ['./custom-child.component.scss']
})


export class CustomChildComponent implements OnInit,AfterContentInit {

  @Input() inputFromParent?: string;
  @Input() content!:TemplateRef<unknown>;
  // @Input() inputObject:{type:string,value:number,content:string};
  model?: ItemDetails[] = [];
  // templateRef!:TemplateRef<unknown>;
  //@ContentChild(TemplateAcessDirective) content!:TemplateAcessDirective;
  // @ContentChild('titleHead') title:any; 
  @Output() outputFromChild = new EventEmitter<any>();
  products?: any[]
  constructor() { }
  ngAfterContentInit(): void {
    // console.log(this.title.nativeElement.innerHTML);
  }

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
