import { Injectable } from '@angular/core';
import{CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';

import{AuthServService}from './auth-serv.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate,CanActivateChild{

  constructor(private authserv:AuthServService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
    //now i have to chech wether user is loggedin or not i hv to return that promise
    //use authserv service
    return this.authserv.isAuthenticated().then(
      (authenticated:boolean)=>{
        if(authenticated){
          return true;
        }
        else{
          this.router.navigate(['/']);

        }
      }
    );
  }
  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
    return this.canActivate(route,state);
  }
}
