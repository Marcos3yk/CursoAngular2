import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url : string = 'http://globo.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature';

  valorAtual: string = "";
  valorSalvo: string="";
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;
  
  // nome: string = "abc"; 

  // pessoa: any = {
  //     nome: "def",
  //     idade: 20
  // }

  getValor(){
    return 1;  
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("Clicou");
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement> evento.target).value);    
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }

  salvarValor(valor){
      this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
