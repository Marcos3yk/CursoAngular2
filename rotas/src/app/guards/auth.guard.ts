import { AuthService } from './../login/auth.service';
import { Observable } from 'rxjs/rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{
    console.log('AuthGuard');
    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);

    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: verificando se o user pode carregar o cod do modulo');
    return this.verificarAcesso();
  }
}
