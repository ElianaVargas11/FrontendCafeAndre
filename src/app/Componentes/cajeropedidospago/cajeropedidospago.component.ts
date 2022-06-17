import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Pago } from 'src/app/Modelo/Pago';
import { Pedido } from 'src/app/Modelo/Pedido';
import { Pedidoproducto } from 'src/app/Modelo/Pedidoproducto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-cajeropedidospago',
  templateUrl: './cajeropedidospago.component.html',
  styleUrls: ['./cajeropedidospago.component.css']
})
export class CajeropedidospagoComponent implements OnInit {

  cliente:Cliente= new Cliente();
  pedidoproductos!:Pedidoproducto[];
  totalpedidoproducto:Pedidoproducto=new Pedidoproducto();
  pago:Pago = new Pago();
  pedido:Pedido = new Pedido();

  constructor( private router:Router, private service:ServiceService, private cookiesSvc:CookieService ) { }

  ngOnInit(): void {
    
   this.carrito();
   this.totalCarrito();
   //this.datosParaFactura();
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

  realizarVenta(cliente:Cliente){
    this.service.postCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      this.cookiesSvc.set('ci',""+cliente.ci);
      //console.log(data);
      if(data.ci>0) {
        //-------------------------------------obtenemos datos para la factur
        this.service.getNumeroFacturaMax()
        .subscribe(data=>{       
          this.pago=data;    
          //console.log(data);
          this.pago.idcliente = cliente.ci;
          this.pago.idpedido = + this.cookiesSvc.get('pedido_id');
          this.pago.preciototal = +this.totalpedidoproducto.preciounitario;
          this.registarFactura( this.pago);
          //this.cookiesSvc.set('pedido_id','nulo');

          this.service.getPedidoId(+ this.cookiesSvc.get('pedido_id'))
          .subscribe(data=>{
            this.pedido=data;

            this.pedido.idestado=3;
            this.service.postPedido(this.pedido)
            .subscribe(data=>{
              this.pedido=data;
              //console.log(this.pedido);
            });
            

          });

          this.router.navigate(["cajeropedidospagofactura"]);
          //this.router.navigate(["cajeropedidos"]);
        });
      }
      
    });    

    
  }

  registarFactura(pago:Pago){
    this.service.postPago(pago)
    .subscribe(data=>{ 
      this.pago=data;          
      this.cookiesSvc.set('pago_N',""+this.pago.facturanumero);
    });    

    //this.cookiesSvc.set('ci',""+cliente.ci);
    //this.cookiesSvc.set('pago_N',""+this.pago.facturanumero);
  }









  
}
