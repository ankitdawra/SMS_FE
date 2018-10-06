import { Component } from '@angular/core'

@Component({
  selector: 'footer',
  templateUrl: 'footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  title: any;
  constructor() {
    this.title = 'i am footer';
  }
}