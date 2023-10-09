import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, Directive, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ZippyContentAttribute } from '../appZippyExample.directive';
import { Pane } from '../pane.directive';
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


export class CustomChildComponent implements OnInit,AfterContentInit,AfterContentChecked, AfterViewInit {

  
  public hero="test";
  @ViewChild('default') defaultElement!:ElementRef;
  @ViewChild('parentContent') parentContent!:ElementRef;
  @ViewChild(Pane)
  set pane(v:Pane){
    setTimeout(() => {
      console.log(v.id)
    },0)
  }
  
  @Input() inputFromParent?: string;
  @Input() content!:TemplateRef<unknown>;
  @ContentChild(ZippyContentAttribute) zipContent!: ZippyContentAttribute; 
  // @Input() inputObject:{type:string,value:number,content:string};
  model?: ItemDetails[] = [];
  // templateRef!:TemplateRef<unknown>;
  //@ContentChild(TemplateAcessDirective) content!:TemplateAcessDirective;
  // @ContentChild('titleHead') title:any; 
  @Output() outputFromChild = new EventEmitter<any>();
  products?: any[]
  
  constructor(private elementRef:ElementRef) { 
    
  }
  ngAfterContentChecked(): void {
    //console.log(`Parent Content: ${this.parentContent}`);
  }
  ngAfterViewInit(): void {
    this.defaultElement.nativeElement.innerHTML = 'red';
    console.log(this.defaultElement.nativeElement)
    console.log(`Parent Content: ${this.parentContent.nativeElement.innerHTML}`);
  }
  ngAfterContentInit(): void {
    //console.log(`Parent Content: ${this.parentContent.nativeElement.innerHTML}`);
   
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
