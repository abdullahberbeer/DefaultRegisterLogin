import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
model:any={}
  constructor(public authService:AuthService,private alertfiy:AlertifyService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.model).subscribe((next)=>{
      this.alertfiy.success("Giriş Başarılı");
      this.router.navigate(['/home'])
    },error=>{
      this.alertfiy.error("Hatalı giriş");

    })
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  logout(){
    localStorage.removeItem("token")
    this.alertfiy.warning("Çıkış yapıldı..")
    this.router.navigate(['/home'])
  }
}
