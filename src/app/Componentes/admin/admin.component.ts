import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private router:Router, private cookiesSvc:CookieService) { }
  ngOnInit(): void {
    this.router.navigate(["home"]);
  }

  home(){
    this.router.navigate(["home"]);
  }

  admin_categorias(){
    this.router.navigate(["admincategorias"]);
  }

  admin_productos(){
    this.router.navigate(["adminproductos"]);
  }

  admin_usuarios(){
    this.router.navigate(["adminusuarios"]);
  }

  admin_mesas(){
    this.router.navigate(["adminmesas"]);
  }

  admin_reportes(){
    this.router.navigate(["adminreportes"]);
  }

  admin_misdatos(){
    this.router.navigate(["adminmisdatos"]);
  }

}
