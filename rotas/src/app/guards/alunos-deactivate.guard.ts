import { Observable } from 'rxjs/rx';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { IFormCanDeactivated } from './iform-candeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivated> {
        canDeactivate(
            component: IFormCanDeactivated,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log("guarda de desativação");
            //return component.podeMudarRota ? component.podeMudarRota() : true;
            return component.podeDesativar();
    }
}
