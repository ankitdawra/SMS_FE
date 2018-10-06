import { Component } from '@angular/core'

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  title: any;
  constructor() {
    this.title = 'i am sidebar';
  }
}