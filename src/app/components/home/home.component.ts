import { Component } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  title: any;
  constructor() {
    this.title = 'i am home';
  }
}