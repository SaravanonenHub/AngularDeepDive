import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voters',
  template: `
    <h1>{{name}}</h1>
    <button type="button" (click)="vote(true)" [disabled]="didVote">Agree?</button>
    <button type="button" (click)="vote(false)" [disabled]="didVote">DisAgree?</button>
  `,
  styles: [
  ]
})
export class VotersComponent  {

  @Input() name ='';
  @Output() voted = new EventEmitter<boolean>();
  didVote=false;
  vote(res:boolean){
    this.voted.emit(res);
    this.didVote = true;
  }
}
