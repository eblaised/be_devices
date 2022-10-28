import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()//use --@Injectable()--- to Inject a service in another service
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
              ): Observable<boolean> | Promise<boolean> | boolean {
    const isSignedIn = this.authService.isAuth;
    if (isSignedIn!== true ){
      this.router.navigate(['/auth']);
    }
    return isSignedIn;
  }


  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    console.log('CanActivate called');
    if (this.authService.isAuth){
      return true
    } else {
      this.router.navigate(['/auth']);
    }
  }
*/

}
