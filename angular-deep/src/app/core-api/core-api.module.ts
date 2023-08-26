import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreAPIRoutingModule } from './core-api-routing.module';
import { LearningModuleComponent } from './learning-module.component';


@NgModule({
  declarations: [
    LearningModuleComponent
  ],
  imports: [
    CommonModule,
    CoreAPIRoutingModule
  ]
})
export class CoreAPIModule { }
