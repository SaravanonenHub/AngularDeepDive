import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperGuideModule } from './developer-guide.module';
import { StandaloneSubComponent } from './standalone-sub.component';
import { CustomParentComponent } from '../custom-parent/custom-parent.component';

@Component({
  selector: 'app-standalone-main',
  standalone: true,
  imports: [CommonModule,StandaloneSubComponent],
  template: `
    <p>
      standalone-main works!
    </p>
  `,
  styles: [
  ]
})
export class StandaloneMainComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

}
