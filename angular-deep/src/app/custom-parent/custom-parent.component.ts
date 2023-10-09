import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomChildComponent } from './custom-child/custom-child.component';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const THEME = 'ace/theme/monokai';
const LANG = 'ace/mode/javascript';

@Component({
  selector: 'app-custom-parent',
  templateUrl: './custom-parent.component.html',
  styleUrls: ['./custom-parent.component.scss']
})
export class CustomParentComponent implements OnInit,AfterViewChecked,AfterViewInit {
  private _parentName:string ="PARENT NAME";
  private prevValue="";
  templateVisiblity:boolean = false;
  @ViewChild(CustomChildComponent,{read:true,static:false}) childComponent!:CustomChildComponent;
  @ViewChild('codeEditor') codeEditorElement!:ElementRef;
  private codeEditor!:ace.Ace.Editor;

  get ParentName(){
    return this._parentName!;
  }
  set ParentName(value:string){
    this._parentName = value;
  }
  constructor() { }
  ngAfterViewInit() {
    const element = this.codeEditorElement.nativeElement;
    const editorOption:Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine:true,
      maxLines:Infinity,
      minLines:10,
      value:`console.log('print')`
    }
    this.codeEditor = ace.edit(element,editorOption);
    this.codeEditor.setTheme(THEME);
    
    this.codeEditor.getSession().on('change',() => {
      const changeCode = this.codeEditor.getValue();
      console.log(this.codeEditor.getValue());
    })
    this.codeEditor.getSession().setMode(LANG);
    this.codeEditor.setFadeFoldWidgets(true);
  }
  ngAfterViewChecked(): void {
    this.childComponent
  }
  inputToChild: string = 'Hi From Parent';
  ngOnInit(): void {
    this.ParentName = "PARENT NAME FROM OnInit";
  

  }

  onChildEvent(event: any) {
    console.log(event);
  }
}
