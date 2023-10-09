import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appUnless]'
})
export class UnlessDirective{
    private hasView=false;
    constructor(private templateRef:TemplateRef<any>,
        private view:ViewContainerRef){}
    @Input() set appUnless(condition:boolean){
        if(!condition && !this.hasView){
            this.view.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if(condition && this.hasView){
            this.view.clear();
            this.hasView = false;
        }

    }
}