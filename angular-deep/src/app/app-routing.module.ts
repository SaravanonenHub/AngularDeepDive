import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomParentComponent } from './custom-parent/custom-parent.component';
import { FormsDeepComponent } from './forms-deep/forms-deep.component';

const routes: Routes = [
  { path: 'parent', component: CustomParentComponent },
  { path: 'forms', component: FormsDeepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
