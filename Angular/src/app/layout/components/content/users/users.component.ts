import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/@fuse/services/data.service';
import { HttpService } from 'app/@fuse/services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
   
  constructor(private data:DataService,private http:HttpService,private router:Router) { }

  private d;
  private searchUser;

  bool4:boolean = false; 
  bool3:boolean;
  bool2:boolean = false;
  bool:boolean = false;

  

  ngOnInit() {
     
this.http.All().subscribe(val=>this.d = val);
   
//============================================================
    this.data.onLoad.subscribe(val=>{
      
    this.bool4 = val.bool;
    this.bool2 = val.bool2;
    this.bool3 = val.bool3;
    

     })
      
    this.data.load();

    
//==================================================================

    this.data.onClick2.subscribe(
      // this.bool4 = false
    )}
//==================================================================




  private obj;

  private login;
  private password;
  private name;

//==================================================================

  edit(item){

     this.bool = true;
     this.bool4 = false;


     this.login = item.login;
     this.password = item.password;
     this.name = item.name;


     this.obj ={ oldPass:item.password,oldLog:item.login,oldName:this.name}
  

  }
//==================================================================

  send(){
    this.obj.NewLog = this.login;
    this.obj.NewPass = this.password;
    this.obj.NewName = this.name;

    console.log(this.obj);

    this.http.rename(this.obj).subscribe(
      val=>this.d = val
    );
    this.bool = false; 
    this.bool4 = true;  

    
  }
//==================================================================
  delete(item){
  this.http.delete(item).subscribe(val=>{
    this.d = val; //array
  });

  }
  

  


}
