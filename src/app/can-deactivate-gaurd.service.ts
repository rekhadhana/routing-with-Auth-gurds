// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{CanDeactivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';



//export a interface,it will only contain hw shld looklike it wnt contans its logic
export interface CanComponentDeactivate{
  canDeactivate:()=>Observable<boolean>|Promise<boolean>|boolean;


  }

//service
export class CanDeactivateGaurdService implements CanDeactivate<CanComponentDeactivate> {
  //this will call when we try leave the route
  canDeactivate(
    component:CanComponentDeactivate,
    currentRoute:ActivatedRouteSnapshot,
    currerntState:RouterStateSnapshot,
    nextState?:RouterStateSnapshot
  ) :Observable<boolean>|Promise<boolean>|boolean
{
return component.canDeactivate();
}  
  constructor() { }
}
