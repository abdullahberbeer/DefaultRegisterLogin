import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { StudentsComponent } from './students/students.component';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '_guards/auth-guards';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

export function TokenGetter(){
 return localStorage.getItem("token")
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config:{
        tokenGetter:TokenGetter,
        allowedDomains:["localhost:5001"],
        disallowedRoutes:["localhost:5001/api/auth"]
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
