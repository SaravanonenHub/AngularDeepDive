import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperGuideRoutingModule } from './developer-guide-routing.module';
import { StandaloneMainComponent } from './standalone-main.component';
import { MyService } from '../services/MyService';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    StandaloneMainComponent,
    DeveloperGuideRoutingModule
  ]
})
export class DeveloperGuideModule {
  myservice:MyService;
  constructor(private service:MyService)
  {
    this.myservice = service;
  }
 }
