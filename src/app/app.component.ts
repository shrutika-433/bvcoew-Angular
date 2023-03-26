
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  num1 = 0;
  num2 = 0;
  result = 0;

  add() {
    this.result = this.num1 + this.num2;
  }
}

