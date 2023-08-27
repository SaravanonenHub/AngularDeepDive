import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLifeCycleRoutingModule } from './component-life-cycle-routing.module';
import { SpyDirective } from './spy.directive';
import { SpyComponent } from './spy.component';
import { FormsModule } from '@angular/forms';
import { OnChangesParentComponent } from './on-changes-parent.component';
import { OnChangesComponent } from './on-changes.component';
import { ChildViewsComponent } from './child-views.component';
import { AfterViewComponent } from './after-view.component';
import { AfterViewParentComponent } from './after-view-parent.component';
import { AfterContentParentComponent } from './after-content-parent.component';
import { AfterContentComponent } from './after-content.component';
import { DoCheckComponent } from './do-check.component';
import { DoCheckParentComponent } from './do-check-parent.component';

@NgModule({
  declarations: [
    SpyDirective,
    SpyComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    ChildViewsComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    DoCheckComponent,
    DoCheckParentComponent
  ],
  imports: [
    CommonModule,
    ComponentLifeCycleRoutingModule,
    FormsModule
  ]
})
export class ComponentLifeCycleModule { }
