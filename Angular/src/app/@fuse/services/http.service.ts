import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  public token = localStorage.getItem('token');
  
  sendLogin(obj) {
   

    return this.http.post('http://localhost:4000/user/login', obj);
  }

  All() {
    return this.http.get('http://localhost:4000/user/All', {
      headers: new HttpHeaders().set('token', this.token),
    });
  }

  rename(obj) {
    return this.http.post('http://localhost:4000/user/rename', obj);

  }
  delete(item) {
    return this.http.post('http://localhost:4000/user/delete', item);

  }
  Register(user) {
    return this.http.post('http://localhost:4000/user/add', user);

  }
}
