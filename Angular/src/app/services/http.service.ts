import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from "socket.io-client";
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService{

  private url = 'http://localhost:3000';
  private socket;

  constructor(private http:HttpClient) {
      this.socket = io(this.url);
  }
//=======================================================

  public sendMessage(message) {
      this.socket.emit('new-message', message);
  }

//=======================================================

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
}
//=======================================================
all(){
  return this.http.get('http://localhost:3000/all');
}

}
