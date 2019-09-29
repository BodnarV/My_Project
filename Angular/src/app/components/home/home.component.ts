import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpS: HttpService) { }
  private text;
  private messages;
//=======================================================


  sendMessage() {
    this.httpS.sendMessage(this.text);
  }
//=======================================================

  ngOnInit() {
    this.httpS.all().subscribe((res) => {
      this.messages = res;
    })
//------------------------------------------------------

    this.httpS.getMessages().subscribe((data: any) => {
      if (data) {
        this.messages = data;
      }
    });
  }
  
}
