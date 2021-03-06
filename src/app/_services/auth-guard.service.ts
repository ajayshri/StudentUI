import { Injectable }       from '@angular/core';
import {CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot}   from '@angular/router';
import { LoginService } from '../_services/loginService';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    //this.authService.refreshAuthenticity();
    console.log(url);
    if (this.authService.isLoggedInAfterAuthenticityRefresh()) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
