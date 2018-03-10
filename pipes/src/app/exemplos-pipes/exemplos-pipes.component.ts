import { Component, OnInit } from '@angular/core';
import { reject } from 'q';
import { Observable } from 'rxjs/rx';

@Component({ 
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'o jardim de ossos Tess gerritsen',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.saraiva.com.br/o-jardim-de-ossos-2637651.html'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
  }
  obterCursos(){
    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(
      v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assícrono'), 2000)
  });

  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor assícrono 2')

  constructor() { }

  ngOnInit() {
  }

 



  
}
