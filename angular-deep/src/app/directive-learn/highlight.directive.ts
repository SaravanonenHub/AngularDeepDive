import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector:'[appHighLighter]'
})
export class HighLighterDirective implements OnInit{
    @Input() appHighLighter:string = '';
    @Input() defaultColour:string = '';
    constructor(private ele:ElementRef){

    }

    ngOnInit(): void {
        this.ele.nativeElement.style.background = this.appHighLighter;
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.highLight('green');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highLight(this.defaultColour);
    }
    private highLight(color:string)
    {
        this.ele.nativeElement.style.background = color;
    }
}