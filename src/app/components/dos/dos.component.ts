import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  
  public initial : number =2;
  @Input() value : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
