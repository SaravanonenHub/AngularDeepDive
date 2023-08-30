import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpyComponent } from './spy.component';
import { OnChangesParentComponent } from './on-changes-parent.component';
import { AfterViewComponent } from './after-view.component';
import { AfterViewParentComponent } from './after-view-parent.component';
import { AfterContentParentComponent } from './after-content-parent.component';
import { DoCheckParentComponent } from './do-check-parent.component';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';

const routes: Routes = [
  {path:'spy',component:SpyComponent}
  ,{path:'onChange',component:OnChangesParentComponent}
  ,{path:'AfterViewChange',component:AfterViewParentComponent}
  ,{path:'AfterContentChange',component:AfterContentParentComponent}
  ,{path:'doCheck',component:DoCheckParentComponent}
  ,{path:'interaction', loadChildren:() => 
            import('./component-interaction/component-interaction.module').then(res => res.ComponentInteractionModule)}
  ,{path:'projection',loadChildren:() => import('./content-projection/content-projection.module').then(res => res.ContentProjectionModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLifeCycleRoutingModule { }
