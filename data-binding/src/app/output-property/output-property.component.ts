import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Output() mudouValor = new EventEmitter();

  @Input() valor : number = 0;

  

  decrementa(){
    this.valor --;
    this.mudouValor.emit( {novoValor: this.valor} );
  }

  incrementa(){
    this.valor ++;
    this.mudouValor.emit( {novoValor: this.valor} );
  }

  constructor() { }

  ngOnInit() {
  }

}
