import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from 'src/app/Modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-cajeromisdatos',
  templateUrl: './cajeromisdatos.component.html',
  styleUrls: ['./cajeromisdatos.component.css']
})
export class CajeromisdatosComponent implements OnInit {

  
  empleado:Empleado=new Empleado();  

  constructor( private service:ServiceService, private cookiesSvc:CookieService, private router:Router ) { }

  ngOnInit(): void { 
    this.service.getEmpleadoCi(this.cookiesSvc.get("usuario_id"))
    .subscribe(data=>{
      this.empleado=data;
    });       
  }

  actualizar_empleado(empleado:Empleado){
    this.service.postEmpleado(empleado)
    .subscribe(data=>{
      this.empleado=data;
      alert("Tus datos se actualizaron con Exito...!!!");      
      this.router.navigate(["home"]);
    });
  }

}
