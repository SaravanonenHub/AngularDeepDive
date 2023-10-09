import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInAttributeDirective } from './built-in-attribute.component';
import { BuiltInStructuralDirectiveComponent } from './built-in-structural.component';

const routes: Routes = [
  {path:'attribute',component:BuiltInAttributeDirective},
  {path:'structural',component:BuiltInStructuralDirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveLearnRoutingModule { }
