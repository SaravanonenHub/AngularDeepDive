import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreAPIRoutingModule } from './core-api-routing.module';
import { LearningModuleComponent } from './learning-module.component';
import { CustomComponent } from './custom.component';
import {  ViewContainerComponent } from './view-container.component';


@NgModule({
  declarations: [
    LearningModuleComponent,
    CustomComponent,
    ViewContainerComponent,
    
  ],
  imports: [
    CommonModule,
    CoreAPIRoutingModule
  ]
})
export class CoreAPIModule { }
