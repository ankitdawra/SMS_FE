import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'sms-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('debugged');
  }
}
