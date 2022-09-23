import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tercera-clase-d';
  public value: number = 0;

  increment(event: number): number {
    console.log(event);    
    return this.value+=event; 
  }  
}
