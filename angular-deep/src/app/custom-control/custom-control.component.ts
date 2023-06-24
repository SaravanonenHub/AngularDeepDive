import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  constructor() { }
  onChange: any = () => { };
  onTouch: any = () => { };
  ngOnInit(): void { }
  // value: string = "";
  set value(v: string) {
    // this.field = v;
    console.log("Register callback for onChange")
    this.onChange(v);
    this.onTouch(v);

  }

  writeValue(val: string): void {
    console.log("Value From Parent: " + val)
    this.value = val;
    // console.log(this.onChange);
  }
  registerOnChange(fn: any): void {

    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
