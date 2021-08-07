import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService,
        private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const currentToken = this.auth.getToken();

        if (currentToken) {
            if (this.auth.isTokenExpired(currentToken)) {
                this.auth.logout();

                return false;
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}