import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private cookiesSvc:CookieService)  { }
  nombre_usuario=this.cookiesSvc.get('usuario_nombre') ;
  rol_usuario=this.cookiesSvc.get('usuarioRol') ;
  ngOnInit(): void {    
  }

  logout(){
    this.cookiesSvc.deleteAll();
  } 

}
