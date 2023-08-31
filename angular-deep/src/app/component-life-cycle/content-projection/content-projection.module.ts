import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ExampleZippyComponent, ZippyContentDirective, ZippyToggleDirective } from './example-zippy.component';
import { ContentProjectionComponent } from './content-projection.component';
import { ZippyMultislotComponent } from './zippy-multislot.component';
import { ZippySingleslotComponent } from './zippy-singleslot.component';


@NgModule({
  declarations: [
    ExampleZippyComponent,
    ContentProjectionComponent,
    ExampleZippyComponent,
    ZippyMultislotComponent,
    ZippyToggleDirective,
    ZippyContentDirective,
    ZippySingleslotComponent,
    
  ],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule
  ]
})
export class ContentProjectionModule { }
