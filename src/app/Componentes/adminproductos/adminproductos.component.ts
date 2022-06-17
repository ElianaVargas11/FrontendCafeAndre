import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adminproductos',
  templateUrl: './adminproductos.component.html',
  styleUrls: ['./adminproductos.component.css']
})
export class AdminproductosComponent implements OnInit {

  productos!: Producto[];
  
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductosOrder().subscribe(data=>{ this.productos=data});   
  }

  editar_producto(producto:Producto){    
    localStorage.setItem("idproducto",producto.idproducto.toString());
    this.router.navigate(['adminproductoseditar']);
  }

  producto_nuevo(){
    this.router.navigate(["adminproductosnuevo"]);
  }


}
