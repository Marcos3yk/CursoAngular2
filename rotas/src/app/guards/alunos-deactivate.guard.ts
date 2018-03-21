import { Observable } from 'rxjs/rx';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
        canDeactivate(
            component: AlunoFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log("guarda de desativação");
            return component.podeMudarRota ? component.podeMudarRota() : true;
    }
}
