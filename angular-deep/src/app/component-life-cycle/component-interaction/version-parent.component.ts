import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: `
    <h3>Version Management</h3>
    <button type="button" (click)="addMajor()">New Major Version</button>
    <button type="button" (click)="addMinor()">New Minor Version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `,
  styles: [
  ]
})
export class VersionParentComponent   {

  major =1;
  minor = 23;

  addMajor(){
    this.major++;
  }

  addMinor(){
    this.minor++
  }

}
