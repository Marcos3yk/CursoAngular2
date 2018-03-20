import { EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' &&
      usuario.senha === '1234'){
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/'])
      }else{
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(true);
      }
      
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
