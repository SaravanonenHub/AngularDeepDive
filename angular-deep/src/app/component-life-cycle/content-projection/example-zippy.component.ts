import { Component, ContentChild, Directive, HostBinding, HostListener, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector:'button[appExampleZippyToggle]'
})
export class ZippyToggleDirective{
  @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;
  @HostListener('click') toggleZippy(){
    this.zippy.expanded = !this.zippy.expanded;
    console.log('Clicked');
  }
  constructor(public zippy:ExampleZippyComponent){}
}

let nextId = 0;
@Directive({
  selector:'[appExampleZippyContent]'
})
export class ZippyContentDirective{
  constructor(public templateRef:TemplateRef<unknown>){}
}

@Component({
  selector: 'app-example-zippy',
  templateUrl: './example-zippy.component.html',
  
})
export class ExampleZippyComponent  {

  contentId = `zippy-${nextId}`;
  @Input() expanded = false;
  @ContentChild(ZippyContentDirective) content!:ZippyContentDirective;
}
