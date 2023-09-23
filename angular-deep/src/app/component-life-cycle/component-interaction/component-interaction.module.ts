import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';
import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VotersComponent } from './voters.component';
import { VoterTakerComponent } from './voter-taker.component';
import { MissioncontrolComponent } from './missioncontrol.component';
import { AstronautComponent } from './astronaut.component';


@NgModule({
  declarations: [
    HeroParentComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VotersComponent,
    VoterTakerComponent,
    MissioncontrolComponent,
    AstronautComponent
  ],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule
  ]
})
export class ComponentInteractionModule { }
