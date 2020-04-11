import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myGreeting = 'Hello';
  myUser: { name: string } = {
    name: 'Santosh Marigowda'
  }
}
