import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router:Router) {
    }
    canActivate(route: ActivatedRouteSnapshot): boolean|UrlTree {
        let token = localStorage.getItem('token');
        if(!token){
            this.router.navigate(['/login']);
        }
        // else{
        //     this.router.navigate(['/dashboard']);
        // }
        return token ? true : false;
    }
}
