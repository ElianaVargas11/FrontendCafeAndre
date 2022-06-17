import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Pedidoproducto } from 'src/app/Modelo/Pedidoproducto';
import { ServiceService } from 'src/app/Service/service.service';
//import { jsPDF } from "jspdf";

@Component({
  selector: 'app-cajeropedidospagofactura',
  templateUrl: './cajeropedidospagofactura.component.html',
  styleUrls: ['./cajeropedidospagofactura.component.css']
})
export class CajeropedidospagofacturaComponent implements OnInit {
  pagonumero!:String;
  pedidoproductos!:Pedidoproducto[];
  totalpedidoproducto: Pedidoproducto = new Pedidoproducto();
  cliente:Cliente = new Cliente();

  constructor(private cookiesSvc:CookieService, private service:ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.carrito();
    this.totalCarrito();
    this.datosCliente(+this.cookiesSvc.get('ci'));    
    this.cookiesSvc.set('pedido_id','nulo')    
    
  }

  datosCliente(ci:number){
    this.service.getClienteId(ci)
    .subscribe(data=>{
      this.cliente=data;            
    });

  }

  carrito(){
    this.service.getCarrito(+this.cookiesSvc.get('pedido_id'))
    .subscribe(data=>{
      this.pedidoproductos=data;            
      this.pagonumero=""+this.cookiesSvc.get('pago_N');
    });
    
  }
  totalCarrito(){
    this.service.getCarritoTotal(+this.cookiesSvc.get('pedido_id'))
    .subscribe(data=>{
      this.totalpedidoproducto=data;
      //console.log(this.totalpedidoproducto);
    });
  }


  imprimir(){
    //borrar
    this.cookiesSvc.delete('ci');
    //this.cookiesSvc.delete('pago_N');
    this.cookiesSvc.set('pedido_id','nulo')    
  }
  nuevoPedido(){
    this.cookiesSvc.delete('ci');
    this.cookiesSvc.delete('pago_N');
    this.cookiesSvc.set('pedido_id','nulo')  
    this.router.navigate(["cajeropedidos"]);
  }


    //borrar
    //this.cookiesSvc.set('ci',""+cliente.ci);
    //this.cookiesSvc.set('pago_N',""+this.pago.facturanumero);

  /*
  ImprimirFactura(){
    const doc = new jsPDF();

   // doc.fromHTML(document.getElementById('fromfactura'),10,10);
    doc.save('Factura');

  }
*/

}
