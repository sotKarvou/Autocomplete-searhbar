import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'schoox-app';
  inputValue: string = '';

  constructor(http: HttpClient) {}

  search(event: any) {
    this.inputValue = event.target.value;
    console.log(this.inputValue);
  }
}
