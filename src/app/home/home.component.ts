import { Component, OnInit } from '@angular/core';
import{AuthServService} from '../auth-serv.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authServ:AuthServService) { }

  ngOnInit() {
  }
onlogin(){
  this.authServ.logIn();
}
onlogout(){
  this.authServ.logOut();
}
}
