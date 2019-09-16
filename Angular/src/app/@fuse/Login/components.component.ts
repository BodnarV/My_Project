import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Local } from 'protractor/built/driverProviders';



@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./component.component.css']
})


export class ComponentsComponent implements OnInit {

   constructor(private http:HttpService,private data:DataService,private router:Router){}

     login :String = 'Vitaliy';
     password :String ='123'; 

    obj = {password:this.password  , login:this.login};


    loginForm: FormGroup;
  
    // constructor(private userService:UsersService) { } 
  
    ngOnInit() {
      this.loginForm = this.createLoginForm();
    } 
  
    createLoginForm() {   
      return new FormGroup({
        email: new FormControl('', [Validators.required]),
        // password: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password2: new FormControl('', [Validators.required, Validators.minLength(3)])
  
      });
    }
    //==============================================================
    private val; 
    private reg ; 
   
    // passwordIdent(control: FormGroup) {
    //   if (control.value.password != control.value.password2) {
    //     this.val = true;
    //     return { "password": true };
    //   } else if (control.value.password == control.value.password2) {
    //     this.val = false;
    //   }
    //   return null;
    // }
  
    private array;
    private rout;

   
    
    //===============================================================================
  loginUser() { 
    
  this.obj = { login: this.login, password: this.password }


   this.http.sendLogin(this.obj).subscribe((val:any)=>{
    
    if(val){    

      this.router.navigate(['users']);
      this.data.click(val.user);
      this.data.click3(val.user);

 
      localStorage.setItem('token',val.token);
       
 


   
    } 
  })
} 



} 
