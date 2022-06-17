import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-admincategoriasnuevo',
  templateUrl: './admincategoriasnuevo.component.html',
  styleUrls: ['./admincategoriasnuevo.component.css']
})
export class AdmincategoriasnuevoComponent implements OnInit {

  categoria: Categoria= new Categoria();

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  actualizar_categoria(categoria:Categoria){
    this.service.postcategoria(categoria)
    .subscribe(data=>{
      this.categoria=data;
      alert("Tus datos se registraron con Exito...!!!");      
      this.router.navigate(["admincategorias"]);
    });
  }

}
