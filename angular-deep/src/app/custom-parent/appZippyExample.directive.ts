import {Directive, TemplateRef} from '@angular/core'

@Directive({
    selector:'[zippyAttribute]'
})

export class ZippyContentAttribute{
    constructor(public templateRef:TemplateRef<unknown>){}
}