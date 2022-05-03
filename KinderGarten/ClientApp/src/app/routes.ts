import { Routes } from "@angular/router";
import { AuthGuard } from "_guards/auth-guards";
import { HomeComponent } from "./home/home.component";
import { StudentsComponent } from "./students/students.component";

export const appRoutes:Routes=[

    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"students",component:StudentsComponent,canActivate:[AuthGuard]},

    {path:"**",component:HomeComponent},


]
