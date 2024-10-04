import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent],
  template: '<h1>{{ message }}</h1><app-hello></app-hello>',
  styles: ['h1 { color: blue; text-align: center; }']
})
export class AppComponent {
  message = 'Hello World';
}