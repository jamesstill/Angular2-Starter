import { Component } from '@angular/core';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor() { } 
  applicationName: string = "Angular 2 Starter";
}