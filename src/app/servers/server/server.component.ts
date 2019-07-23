import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params,Router,Data} from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route:ActivatedRoute,
  private router:Router) { }

  ngOnInit() {
   //get using resolve gaurd
      this.route.data.subscribe(
         (data:Data)=>{
           //data['server'] that server is path property
           this.server=data['server'];
         }
      )
   
 //>>>>>>>>>>>>>  
    // //+ for converting string to number
    // const id=+this.route.snapshot.params['id']
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params:Params)=>{
    //    //u get a ner server when params r changed
    //     this.server=this.serversService.getServer(+params['id']);
    //   }
    // )
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo:this.route,queryParamsHandling:'preserve'});
  }

}
