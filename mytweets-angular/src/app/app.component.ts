import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'My tweets !';
  public tweets = [{
    content: 'Angular is the best framework EVER for sure!',
    likes: '5'
  }, {
    content: 'Nop. It is react sorry :)',
    likes: '2'
  }, {
    content: 'Wow guys you are so old-fashioned, plz checkout Vuejs...',
    likes: '9'
  }]
}
