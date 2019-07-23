import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';


import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGaurdService} from './auth-gaurd.service';
import{CanDeactivateGaurdService}from './can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import{ResolveGaurdService} from './resolve-gaurd.service';






const routes: Routes = [ 
  { path:"", component:HomeComponent},
  {path:'users',component:UsersComponent,children:[
    {path:':id/:name',component:UserComponent},
    
  ]},
  {path:'servers' ,
  // canActivate:[AuthGaurdService]
  canActivateChild:[AuthGaurdService]
   ,component:ServersComponent,children:[
    {path:':id', component:ServerComponent, resolve:{server:ResolveGaurdService}},
    {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGaurdService]},
  ]},
  // {path:"not-found",component:PageNotFoundComponent},
  {path:"not-found",component:ErrorPageComponent,data:{message:'page not found!'}},
  
  {path:'**',redirectTo:'/not-found'}
  
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{useHash:true})],
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
