import { trigger } from "@angular/animations";
import { Component } from "@angular/core";
import {of,switchMap} from 'rxjs'
const switched = of(1,2,3).pipe(switchMap(x => of(x,x**2,x**3)));
switched.subscribe(x => console.log(x));
@Component({
    selector:'appAttribute',
    template:`
    <h1>Built-In Attribute Binding</h1>
    <h2>Using ngClass</h2>
    <p>******Use to add or remove group of class********</p>
    <div [ngClass] = "isSpecial ? 'special' : ''" >
        This div is special
    </div>
    <h2>Using ngClass with methods</h2>
    <div [ngClass]="currentClasses">
        This div is savable, unchangeable and special.
    </div>
    <h2>Using ngStyle with methods</h2>
    <p>*********Use to add or remove group of style to HTML element*******</p>
    <div [ngStyle]="currentStyles">
        This div is initially italic,normal weight and normal size.
    </div>
    <p appHighLighter ="red" [defaultColour]="default">Using ngModel {{1+1}}</p>

    <button type="button" (click)="changeClass()">Click me</button>
    `,
    styles:[`.special{
        color:red;
    }
    .saveable{
        background:green;
    }`]
})
export class BuiltInAttributeDirective{
    isSpecial= true;
    canSave=true;
    isUnChanged = true;
    default="yellow";
    constructor(){
        this.setClasss();
        this.changeStyle();
    }
    currentClasses:Record<string,boolean> = {}
    currentStyles:Record<string,string> = {}

    setClasss(){
        this.currentClasses = {
            saveable:this.canSave,
            unchanged:!this.isUnChanged,
            special:this.isSpecial
        }
    }
    changeClass(){
        this.currentClasses = {
            saveable:!this.canSave,
            unchanged:this.isUnChanged,
            special:!this.isSpecial
        }
    }

    changeStyle(){
        this.currentStyles = {
            'font-style':this.canSave ? 'italic':'normal',
            'font-weight':!this.isUnChanged? 'bold':'normal',
            'font-size':this.isSpecial? '24px':'12px'

        }
    }

    
}