import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from 'src/app/Modelo/Empleado';

import { ServiceService } from 'src/app/Service/service.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  datosLogin = {
    usuario:"",
    contrasena:""   
  }
  empleado:Empleado = new Empleado();

  mensaje_login!:String;
  
  constructor(private cookiesSvc:CookieService, private service:ServiceService)  { }
  
  ngOnInit(): void {
   
  }


  login(usuario:String, contrasena:String){
    this.cookiesSvc.deleteAll();
     this.service.getEmpleadoLogin(usuario , contrasena)
     .subscribe(data=>{
       this.empleado=data;       

     this.cookiesSvc.set('usuario_nombre',"" + this.empleado.nombre+" "+this.empleado.apellidos+"");
     this.cookiesSvc.set('usuarioRol', ""+this.empleado.rol+"");
     this.cookiesSvc.set('usuario_id', ""+this.empleado.ci+"");
     this.cookiesSvc.set('pedido_id', 'nulo');

      if(this.cookiesSvc.get('usuarioRol')=='undefined') 
      {
        this.cookiesSvc.deleteAll();      
      }
      if(this.cookiesSvc.get('usuarioRol')=='null') 
      {
        this.cookiesSvc.deleteAll();
        this.cookiesSvc.set('mensaje_login', "error");
      }
    });     
     
  }    

  error():Boolean{
    if(this.cookiesSvc.get('mensaje_login')=='error'){
      return true;
    }else{
      return false;
    }
   }

  
}
