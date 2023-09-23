import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs:string[]=[];
  prevMsg='';
  preMsgCount=1;

  log(msg:string){
    console.log(msg);
    if(msg ===this.prevMsg)
    {
      this.logs[this.logs.length - 1] = msg+`(${this.preMsgCount +=1}x)`;
    }
    else{
      this.prevMsg = msg;
      this.preMsgCount =1;
      this.logs.push(msg);
    }
  }
  clear() {this.logs = [];}

  constructor() { }

  tick(){this.tick_then(() => {});}
  tick_then(fn:() => any) {setTimeout(fn,0);}
}
