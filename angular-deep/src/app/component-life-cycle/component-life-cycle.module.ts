import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLifeCycleRoutingModule } from './component-life-cycle-routing.module';
import { SpyDirective } from './spy.directive';
import { SpyComponent } from './spy.component';
import { FormsModule } from '@angular/forms';
import { OnChangesParentComponent } from './on-changes-parent.component';
import { OnChangesComponent } from './on-changes.component';

@NgModule({
  declarations: [
    SpyDirective,
    SpyComponent,
    OnChangesParentComponent,
    OnChangesComponent
  ],
  imports: [
    CommonModule,
    ComponentLifeCycleRoutingModule,
    FormsModule
  ]
})
export class ComponentLifeCycleModule { }
