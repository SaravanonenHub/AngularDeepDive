import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveLearnRoutingModule } from './directive-learn-routing.module';
import { BuiltInAttributeDirective } from './built-in-attribute.component';
import { HighLighterDirective } from './highlight.directive';
import { BuiltInStructuralDirectiveComponent } from './built-in-structural.component';
import { UnlessDirective } from './unless.directive';


@NgModule({
  declarations: [
    BuiltInAttributeDirective,
    HighLighterDirective,
    BuiltInStructuralDirectiveComponent,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    DirectiveLearnRoutingModule,
  ]
})
export class DirectiveLearnModule { }
