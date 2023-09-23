import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef, inject } from "@angular/core";
@Component({
    standalone: true,
    selector: 'dynamic',
    template: `<span>This is a content of a dynamic component.</span>`,
  })
  class DynamicComponent {
    vcr = inject(ViewContainerRef);
  }
@Component({
    selector:'appViewContainer',
    template:`
    <h1>See the view container</h1>
    <ul>
        <li><span #span> this is an html element</span></li>
        <li><appCustomComponent #custom></appCustomComponent></li>
        <li><ng-template #template [ngIf] = "true">this is template</ng-template></li>
    </ul>
    <button type="button" (click) = "loadTemplate()">Click to add Template</button>
    <button type="button" (click) = "loadComponent()">Click to add Template</button>
    <ng-template #dynamic>
        <p>This is Dynamic content</p>
    </ng-template>
    <ng-container #container></ng-container>`
})

export class ViewContainerComponent implements AfterViewInit,OnInit{
    @ViewChild('span',{read:ViewContainerRef}) spanElement:any;
    @ViewChild('custom',{read:ViewContainerRef}) customElement:any;
    @ViewChild('dynamic') templateElement!:TemplateRef<any>;
    @ViewChild('container',{read:ViewContainerRef}) container!:ViewContainerRef
    vcr = inject(ViewContainerRef);
    constructor(private viewContainerRef:ViewContainerRef,private resolver:ComponentFactoryResolver){
        
    }
    ngOnInit(){
        
    }
    loadComponent(){
       this.container.createComponent(DynamicComponent);
    }
    loadTemplate(){
        this.container.createEmbeddedView(this.templateElement);
     }
    ngAfterViewInit(): void {
        console.log('>>> view container element', this.viewContainerRef.length)
        console.log('>>> host element',this.viewContainerRef);
        console.log('>>> span element',this.spanElement);
        console.log('>>> custom element',this.customElement);
        console.log('>>> template element',this.templateElement);
       
        
    }



}