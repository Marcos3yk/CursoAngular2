import { Observable } from 'rxjs/rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class AlunosGuard implements CanActivateChild {
    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            // console.log(route);
            // console.log(state);

            // if(state.url.includes('editar')){
            //     alert('Usuario sem permissão');
            //     return Observable.of(false);
            // }
            return true;
        }
}