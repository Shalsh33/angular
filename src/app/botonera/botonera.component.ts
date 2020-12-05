import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products/Product';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent implements OnInit {

  @Input()
  qtb : number;

  @Input()
  stock : number;

  @Output() 
  qtbChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() 
  custom: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  addOne() : void{
    if (this.qtb < this.stock){
      this.qtb++;
      this.qtbChange.emit(this.qtb);
    } else {
      this.custom.emit()
    }

  }
  removeOne() : void {
    if (this.qtb > 0){
      this.qtb--;
      this.qtbChange.emit(this.qtb);
    }
  }

}
