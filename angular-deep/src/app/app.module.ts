import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialDirective } from './special.directive';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { CustomParentComponent } from './custom-parent/custom-parent.component';
import { CustomChildComponent, TemplateAcessDirective } from './custom-parent/custom-child/custom-child.component';
import { FormsDeepComponent } from './forms-deep/forms-deep.component';
import { PeekABooParentComponent } from './component-life-cycle/peek-a-boo-parent.component';
import { PeekABooDirective } from './component-life-cycle/peek-a-boo.directive';
import { PeekABooComponent } from './component-life-cycle/peek-a-boo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateAcessDirective,
    SpecialDirective,
    CustomControlComponent,
    CustomParentComponent,
    CustomChildComponent,
    FormsDeepComponent,
    PeekABooParentComponent,
    PeekABooDirective,
    PeekABooComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
