import { Injectable, EventEmitter } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpService) { }
//=========================================================

  onClick: EventEmitter<any> = new EventEmitter();
  onClick2: EventEmitter<any> = new EventEmitter();
  onClick3: EventEmitter<any> = new EventEmitter();
  onLoad: EventEmitter<any> = new EventEmitter();


  bool: boolean = false;
  bool2: boolean = false;
  bool3:boolean = true;
  private users;
//=========================================================

  click(val) { 
    
    this.bool = true;
    this.bool3 = false;
     

    if(val[0].admin == true){
      this.bool2 = true;
    }
   
  }
//=========================================================

  click2() {
    
    this.bool = false;
    this.bool2 = false;
    this.bool3 = true;
    this.onClick2.emit();

  }
//=========================================================
 
  click3(val) {
    this.onClick3.emit(val);
  }

//=========================================================

  load() {
    this.onLoad.emit({bool:this.bool,bool2:this.bool2,bool3:this.bool3,users:this.users}) 
  }
//=========================================================

}
