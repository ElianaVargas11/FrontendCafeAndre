import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-cafeandre';  

  constructor(private cookiesSvc:CookieService )  { }


  login_form():boolean{
    if(!this.cookiesSvc.get('usuarioRol')) {
      return true;
    }
    return false;

  }

  
  menu_admin():boolean{
    if(this.cookiesSvc.get('usuarioRol')=="administrador"){
      return true;
    }
    else{
      return false;
    }
  }
  menu_cajero():boolean{
    if(this.cookiesSvc.get('usuarioRol')=="cajero"){      
      return true;
    }
    else{
      return false;
    }
  }
  
}
