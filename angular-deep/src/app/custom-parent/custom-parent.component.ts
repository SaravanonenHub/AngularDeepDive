import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-parent',
  templateUrl: './custom-parent.component.html',
  styleUrls: ['./custom-parent.component.scss']
})
export class CustomParentComponent implements OnInit {
  private _parentName:string ="PARENT NAME";
  templateVisiblity:boolean = false;
  get ParentName(){
    return this._parentName!;
  }
  set ParentName(value:string){
    this._parentName = value;
  }
  constructor() { }
  inputToChild: string = 'Hi From Parent';
  ngOnInit(): void {
    this.ParentName = "PARENT NAME FROM OnInit";
  }
  onChildEvent(event: any) {
    console.log(event);
  }
}
