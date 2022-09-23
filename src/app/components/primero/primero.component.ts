import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {
  public flag : boolean =true
  constructor() { }

  ngOnInit(): void {
    this.onclick()
  }

  onclick(){
    this.flag = !this.flag;
  }

  onEnter(){
    console.log("Entering")
  }

  validation(event: any){
    console.log(event)
    //console.log(event.target.value)
    console.log((event.target as HTMLInputElement).value)
    let replace = (event.target as HTMLInputElement).value.replace(/[^A-Za-zá-úÁ-Ú ]|[*÷×]/g,'');
    (event.target as HTMLInputElement).value = replace;
  }

}

