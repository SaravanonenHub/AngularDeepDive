import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContainerComponent } from './view-container.component';

const routes: Routes = [
  {path:'viewContainer',component:ViewContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreAPIRoutingModule { }
