import { AfterViewInit, Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'angular-deep';
  parentTest = new FormControl('parent Value')
  
}
