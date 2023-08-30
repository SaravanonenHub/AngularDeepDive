import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-taker',
  template: `
   <h1>Aggreed:{{agreed}}, DisAggreed:{{disAgreed}}</h1>
   <app-voters *ngFor="let name of voters" [name]="name" (voted)="onVoted($event)"></app-voters>
  `,
  styles: [
  ]
})
export class VoterTakerComponent   {

  agreed=0;
  disAgreed = 0;
  voters = ['Vijay','Rajini']
 onVoted(event:boolean){
  if(event)
    this.agreed++;
  else this.disAgreed++;
 }


}
