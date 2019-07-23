import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGaurdService} from './auth-gaurd.service';
import{AuthServService} from './auth-serv.service';
import{CanDeactivateGaurdService}from './can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import{ResolveGaurdService} from './resolve-gaurd.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServersService,
    AuthGaurdService,AuthServService,
    CanDeactivateGaurdService,ResolveGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
