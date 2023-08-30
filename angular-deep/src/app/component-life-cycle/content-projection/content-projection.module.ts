import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ExampleZippyComponent } from './example-zippy.component';
import { ContentProjectionComponent } from './content-projection.component';
import { ZippyMultislotComponent } from './zippy-multislot.component';


@NgModule({
  declarations: [
    ExampleZippyComponent,
    ContentProjectionComponent,
    ZippyMultislotComponent
  ],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule
  ]
})
export class ContentProjectionModule { }
