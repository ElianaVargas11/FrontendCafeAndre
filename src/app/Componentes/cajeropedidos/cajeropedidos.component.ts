import { getLocaleDateFormat } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { filter } from 'rxjs';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Pedido } from 'src/app/Modelo/Pedido';
import { Pedidoproducto } from 'src/app/Modelo/Pedidoproducto';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-cajeropedidos',
  templateUrl: './cajeropedidos.component.html',
  styleUrls: ['./cajeropedidos.component.css']
})
export class CajeropedidosComponent implements OnInit {
  
  categorias!:Categoria[];  
  productos!:Producto[];
  pedido:Pedido = new Pedido();   
  pedidoproducto:Pedidoproducto = new Pedidoproducto();   
  pedidoproductobuscar:Pedidoproducto = new Pedidoproducto();   
  pedidoproductoexiste:Pedidoproducto = new Pedidoproducto();   
  pedidoproductos!:Pedidoproducto[];   

  totalpedidoproducto:Pedidoproducto = new Pedidoproducto();   
  pedidoproductode:Pedidoproducto = new Pedidoproducto();   
  
  //total!:number;
  cadena_number!:number;
  cadena_string!:String;
  total:Number =0;
  constructor(private service:ServiceService, private cookiesSvc:CookieService, private router:Router ) { }    
  ngOnInit(): void {    
    //------------------------------------pregunta si no existe un pedido en curso so no existe lo crea
    if(this.cookiesSvc.get('pedido_id')=='nulo'){      
      this.service.getPedidoMax()    
      .subscribe(data=>{   
        this.pedido=data;         
        //console.log(data);
        this.pedido.idempleado = +this.cookiesSvc.get('usuario_id');
        this.cadena_string =""+data.idpedido; 
        this.cookiesSvc.set('pedido_id',""+this.pedido.idpedido);
        //-------------------------------- Crea el nuevo pedido
        this.nuevoPedido(this.pedido);  
        //console.log(this.cadena_string);
        //this.pedido.fechapedido="2022-05-28"        
      });
    }  
    //-------------------------------------- carga la lista de categorias activas    
    this.service.getCategoriasActivas()
    .subscribe(data=>{
      this.categorias=data;
      this.listarProductos( ""+data[0].idcategoria);
    });    
      
    this.carrito();
  }  
  //----------------------------------------- Crea un nuevo pedido
  nuevoPedido(pedido:Pedido){
    this.service.postPedido(pedido)
    .subscribe(data=>{   
      this.pedido=data;});         
  }
  
  listarProductos(idcategoriaproducto:String){         
    this.service.getProductosCategoria(idcategoriaproducto)
    .subscribe(data=>{
      this.productos=data;
    });
  }

  addProductoCarrito(idproducto:BigInt,nombreproducto:String, precio:number){
    if(idproducto!){
      
      this.pedidoproductobuscar.idpedido = +this.cookiesSvc.get('pedido_id');
      this.pedidoproductobuscar.idproducto = +idproducto;
      this.pedidoproductobuscar.cantidad = +1;
      //----------------------------------
      this.pedidoproductobuscar.nombreproducto = ""+nombreproducto;
      this.pedidoproductobuscar.preciounitario = +precio;
  
      //--------------------------------------consultamos si ya exite el producto en el pedido
      this.service.getPedidoproductoExiste(+this.pedidoproductobuscar.idpedido, +this.pedidoproductobuscar.idproducto)
      .subscribe(data=>{
        this.pedidoproducto=data;

        //console.log(data);
//        console.log(this.pedidoproducto);
        if(this.pedidoproducto!){
          
          this.pedidoproducto.cantidad = this.pedidoproducto.cantidad + 1;
          this.nuevoPedidoproducto(this.pedidoproducto);            
        }
        else
        {
          this.nuevoPedidoproducto(this.pedidoproductobuscar);          
        }
      });
      

    } 
  }
  //-----------------------------------------Crea nuevo producto en pedidoproducto o lo actualiza
  nuevoPedidoproducto(pedidoproducto:Pedidoproducto)
  {
    this.service.postPedidoproducto(pedidoproducto)
    .subscribe(data=>{
      this.pedidoproducto=data;      
      this.carrito();
    });
  }

  
  addPedidoproducto(pedidoproducto:Pedidoproducto)
  {
    pedidoproducto.cantidad = pedidoproducto.cantidad+1;
    this.service.postPedidoproducto(pedidoproducto)
    .subscribe(data=>{
      this.pedidoproducto=data;
    });
  }

  carrito(){
    this.service.getCarrito(+this.cookiesSvc.get('pedido_id'))
    .subscribe(data=>{
      this.pedidoproductos=data;      
      this.totalCarrito();
    });
    
  }
  totalCarrito(){
    this.service.getCarritoTotal(+this.cookiesSvc.get('pedido_id'))
    .subscribe(data=>{
      this.totalpedidoproducto=data;
      //console.log(this.totalpedidoproducto);
    });
  }


  borrarDeCarrito(pedidoproductode:Pedidoproducto){
    this.service.deletePedidoproductoId(pedidoproductode) 
    .subscribe(data=>{
      this.pedidoproductode=data      
      this.carrito();
    });
  }

  cancelarPedido(){
    this.cookiesSvc.set('pedido_id','nulo');
    this.router.navigate(["cajeropedidoscancelado"]);
  }

  pagarPedido(){
    this.router.navigate(["cajeropedidospago"]);
  }


}


