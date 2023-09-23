import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//import {customControl} from '../custom-control/CustomControlComponent';
@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomControlComponent,
      multi: true
    }]
})
export class CustomControlComponent implements OnInit, ControlValueAccessor {
  field?: string
  //custom:customControl;
  constructor() { }
  onChange: any = () => { };
  onTouch: any = () => { };
  ngOnInit(): void { }
  private _value: string = "";
  set value(v: string) {
    // this.field = v;
    console.log("Register callback for onChange")
    this._value = v;
    this.onChange(v);
    //this.onTouch(v);

  }
  // Getter for the value
  get value(): any {
    //debugger;
    return this._value;
  }
  writeValue(val: string): void {
    //debugger;
    console.log("Value From Parent: " + val)
    this.value = val;
    //this.onChange(val);
    // console.log(this.onChange);
  }
  // onInputChange(event:any){
  //   this.onChange(event.target.value);
  // }
  registerOnChange(fn: any): void {

    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
