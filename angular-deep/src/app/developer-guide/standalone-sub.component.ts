import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-sub',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      standalone-sub works!
    </p>
  `,
  styles: [
  ]
})
export class StandaloneSubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const calculateFibonacci = this.getFibnocci();
    console.log(calculateFibonacci(6));
  }

  getFibnocci(){
    const fibno = (num:number):number => {
      if(num ===1 || num ==2) 
        return 1;
      return fibno(num) + fibno(num)
    }
    return fibno;
  }
}
