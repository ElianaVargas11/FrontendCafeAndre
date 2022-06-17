import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adminusuarionuevo',
  templateUrl: './adminusuarionuevo.component.html',
  styleUrls: ['./adminusuarionuevo.component.css']
})
export class AdminusuarionuevoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
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
