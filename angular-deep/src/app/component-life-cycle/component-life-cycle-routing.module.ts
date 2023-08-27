import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpyComponent } from './spy.component';
import { OnChangesParentComponent } from './on-changes-parent.component';
import { AfterViewComponent } from './after-view.component';
import { AfterViewParentComponent } from './after-view-parent.component';
import { AfterContentParentComponent } from './after-content-parent.component';
import { DoCheckParentComponent } from './do-check-parent.component';

const routes: Routes = [
  {path:'spy',component:SpyComponent}
  ,{path:'onChange',component:OnChangesParentComponent}
  ,{path:'AfterViewChange',component:AfterViewParentComponent}
  ,{path:'AfterContentChange',component:AfterContentParentComponent}
  ,{path:'doCheck',component:DoCheckParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLifeCycleRoutingModule { }
