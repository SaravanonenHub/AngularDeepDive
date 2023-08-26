import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomParentComponent } from './custom-parent/custom-parent.component';
import { FormsDeepComponent } from './forms-deep/forms-deep.component';
import { PeekABooParentComponent } from './component-life-cycle/peek-a-boo-parent.component';

const routes: Routes = [
  { path: 'parent', component: CustomParentComponent },
  { path: 'forms', component: FormsDeepComponent },
  {path:'peek',component:PeekABooParentComponent},
  {path:'lifeHook'
      ,loadChildren:() => 
          import('./component-life-cycle/component-life-cycle.module')
          .then(res => res.ComponentLifeCycleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
