import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-admincategorias',
  templateUrl: './admincategorias.component.html',
  styleUrls: ['./admincategorias.component.css']
})
export class AdmincategoriasComponent implements OnInit {

  
  categorias!: Categoria[];
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCategorias().subscribe(data=>{ this.categorias=data});   
  }

  editar_categoria(categoria:Categoria){    
    localStorage.setItem("idcategoria",categoria.idcategoria.toString());
    this.router.navigate(['admincategoriaseditar']);
  }

  categoria_nuevo(){
    this.router.navigate(["admincategoriasnuevo"]);
  }

}
