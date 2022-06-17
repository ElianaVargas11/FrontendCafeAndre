import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/Service/service.service';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.component.html',
  styleUrls: ['./adminusuarios.component.css']
})
export class AdminusuariosComponent implements OnInit {
  
  empleados!: Empleado[]; 
  
  
  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getEmpleados().subscribe(data=>{ this.empleados=data});   
  }

  editar_usuario(empleado:Empleado){    
    localStorage.setItem("ci",empleado.ci.toString());
    this.router.navigate(['adminusuarioeditar']);
  }

  usuario_nuevo(){
    this.router.navigate(["adminusuarionuevo"]);
  }

}
