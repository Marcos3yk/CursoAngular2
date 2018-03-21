import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class CursosGuard implements CanActivateChild {
    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            return true;
        }
}