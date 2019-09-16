import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  loginForm: FormGroup;

  user: { login: string, password: string, name: string } = { login: '', password: '', name: '' };

  constructor(private http: HttpService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.RegisterForm();
  }

  RegisterForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(3)]),

    }, this.passwordIdent.bind(this))
  }
 
  private val;

  passwordIdent(control: FormGroup) {
    if (control.value.password != control.value.password2) {
      this.val = true;
      return { "password": true };
    } else if (control.value.password == control.value.password2) {
      this.val = false;
    }
    return null;
  }


  registerUser() {
    this.http.Register(this.user).subscribe(
      res => console.log(res)
    );
    this.router.navigate(['login'])
  }  


}
