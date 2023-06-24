import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialDirective } from './special.directive';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { CustomParentComponent } from './custom-parent/custom-parent.component';
import { CustomChildComponent } from './custom-parent/custom-child/custom-child.component';
import { FormsDeepComponent } from './forms-deep/forms-deep.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialDirective,
    CustomControlComponent,
    CustomParentComponent,
    CustomChildComponent,
    FormsDeepComponent
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
