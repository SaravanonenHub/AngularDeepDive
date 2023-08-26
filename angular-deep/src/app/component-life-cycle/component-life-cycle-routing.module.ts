import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpyComponent } from './spy.component';
import { OnChangesParentComponent } from './on-changes-parent.component';

const routes: Routes = [
  {path:'spy',component:SpyComponent}
  ,{path:'onChange',component:OnChangesParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLifeCycleRoutingModule { }
