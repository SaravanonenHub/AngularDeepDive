import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-forms-deep',
  templateUrl: './forms-deep.component.html',
  styleUrls: ['./forms-deep.component.scss']
})
export class FormsDeepComponent implements OnInit {
  ctrl = new FormControl(3);
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => { observer.next(new Date().toString()) }, 100)
  })
  public frmGroup: FormGroup;

  public formObjects = {
    userName: new FormControl(''),
    emailId: new FormControl(''),
    title: new FormControl(''),

  }

  get f() {
    return this.formObjects;
  }
  constructor() {
    this.frmGroup = new FormGroup(this.formObjects);
  }

  ngOnInit(): void {
  }

}
