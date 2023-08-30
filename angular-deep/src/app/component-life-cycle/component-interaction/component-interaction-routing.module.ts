import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameParentComponent } from './name-parent.component';
import { VersionParentComponent } from './version-parent.component';
import { VoterTakerComponent } from './voter-taker.component';
import { MissioncontrolComponent } from './missioncontrol.component';

const routes: Routes = [
  {path:'inputsetter',component:NameParentComponent}
  ,{path:'inputonchange',component:VersionParentComponent}
  ,{path:'childEmit',component:VoterTakerComponent}
  ,{path:'passbyService',component:MissioncontrolComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule { }
