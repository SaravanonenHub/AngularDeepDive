import { Component } from "@angular/core";
import { hero } from "../component-life-cycle/component-interaction/heros";
interface Ihero{
    HeroName:string;
    ActionType:string;
}
@Component({
    selector:'[app-built-in-structural]',
    template:`<div *ngIf="hero">
        <p>{{hero.HeroName}}</p>
    </div>
    <h1>########FOR LOOP######</h1>
    <div *ngFor="let hero of heroes; let i = index;let odd=odd; trackBy:trackById" [class.odd] = "odd">
      ({{i}})  {{hero.HeroName}}
    </div>

    <h1>*****Using ng-template****</h1>
    <ng-template ngFor let-hero [ngForOf]="heroes" 
      let-odd = "odd" let-i = "index" [ngForTrackBy]="trackById" >
      <div [class.odd] = "odd">
        {{hero.HeroName}}
      </div>
      
    </ng-template>

    <p *appUnless="condition"> Show this sentence unless the condition is true.</p>
    `,
    styles:[`
    .odd{
        color:red
    }
    `]
})

export class BuiltInStructuralDirectiveComponent{
    condition = true;
    constructor(){
        this.heroes.push()
    }
    hero:Ihero = {HeroName:'kamal',ActionType:'all'}
    heroes:Ihero[]=[
        {HeroName:'Vijay',ActionType:'Action'},
        {HeroName:'kamal',ActionType:'all'},
        {HeroName:'rajini',ActionType:'style'},
        {HeroName:'ajith',ActionType:'walk'}];
    

        trackById(index: number, item: any): number { 
            console.log(item)
            return item.id; 
        }
}