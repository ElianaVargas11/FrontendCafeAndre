import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adminproductoseditar',
  templateUrl: './adminproductoseditar.component.html',
  styleUrls: ['./adminproductoseditar.component.css']
})
export class AdminproductoseditarComponent implements OnInit {

  
  producto:Producto = new Producto();
  categorias!:Categoria[];
  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();     
    this.service.getCategorias().subscribe(data=>{ this.categorias=data});  
  }
  
  Editar(){
    this.service.getProductoid(""+localStorage.getItem("idproducto"))
    .subscribe(data=>{
      this.producto=data;
    });
  }

  actualizar_producto(producto:Producto){
    this.service.postProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Tus datos se actualizaron con Exito...!!!");      
      this.router.navigate(["adminproductos"]);
    });
  }


}
