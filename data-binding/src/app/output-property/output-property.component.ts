import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Output() mudouValor = new EventEmitter();

  @Input() valor : number = 0;

  @ViewChild('campoInput') campoValorInput : ElementRef;

  
  

  decrementa(){
    this.campoValorInput.nativeElement.value --;
    this.mudouValor.emit( {novoValor: this.valor} );
  }

  incrementa(){
    this.campoValorInput.nativeElement.value ++;
    this.mudouValor.emit( {novoValor: this.valor} );
  }

  constructor() { }

  ngOnInit() {
  }

}
