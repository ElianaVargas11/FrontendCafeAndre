import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adminusuarioeditar',
  templateUrl: './adminusuarioeditar.component.html',
  styleUrls: ['./adminusuarioeditar.component.css']
})
export class AdminusuarioeditarComponent implements OnInit {

  empleado:Empleado = new Empleado();
  //id!:String;
  constructor(private router:Router ,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
     //let id =localStorage.getItem("ci");
  }
  
  Editar(){

    this.service.getEmpleadoCi(""+localStorage.getItem("ci"))
    .subscribe(data=>{
      this.empleado = data;
    });
  }

  actualizar_empleado(empleado:Empleado){
    this.service.postEmpleado(empleado)
    .subscribe(data=>{
      this.empleado=data;
      alert("Tus datos se actualizaron con Exito...!!!");      
      this.router.navigate(["adminusuarios"]);
    });
  }
}
