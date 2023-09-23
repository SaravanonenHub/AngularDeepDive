import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { OnChangesComponent } from './on-changes.component';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styles: [
  ]
})
export class OnChangesParentComponent implements OnInit {
  hero!:Hero;
  power='';
  title='onChanges';
  @ViewChild(OnChangesComponent) childView!:OnChangesComponent;
  constructor() { this.reset();}
  reset(){
    this.hero = new Hero('Vijay');
    this.power = 'Dance';
    if(this.childView)
      this.childView.reset();
  }
  ngOnInit(): void {
  }

}
