import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome:'Fabiane', email: 'fabi@gmail.com'},
    {id: 2, nome:'Fernanda', email: 'fe@gmail.com'},
    {id: 3, nome:'Tim Duncan', email: 'td@gmail.com'}
  ];
  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for (let i = 0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }
  constructor() { }

}
