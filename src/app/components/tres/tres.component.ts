import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.scss']
})
export class TresComponent implements OnInit {

  @Output() salida: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('click')
    this.salida.emit(1)
  }

  restar(){
    this.salida.emit(-1)
  }
}

