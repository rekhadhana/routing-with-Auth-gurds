import { Injectable } from '@angular/core';
import{Resolve,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { ServersService } from './servers/servers.service';

import{Observable} from 'rxjs';

interface Server{
  id:number,
  name:string,
  status:string
}
@Injectable()
export class ResolveGaurdService implements Resolve<Server> {
//we r going user serverservice to fetch serveres
  constructor(private serverService:ServersService) { }
  
  //implement resolve method
  resolve(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<Server>|Promise<Server>|Server{
    //this will load our data in advance
      return this.serverService.getServer(+route.params['id']);
    }

}
