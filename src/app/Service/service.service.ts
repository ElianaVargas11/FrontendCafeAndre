import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../Modelo/Empleado';
import { Categoria } from '../Modelo/Categoria';
import { Producto } from '../Modelo/Producto';
import { Pedido } from '../Modelo/Pedido';
import { Pedidoproducto } from '../Modelo/Pedidoproducto';
import { Cliente } from '../Modelo/Cliente';
import { Pago } from '../Modelo/Pago';
import { Reporteventas } from '../Modelo/Reporteventas';
import { Reportetotales } from '../Modelo/Reportetotales';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  Url='http://localhost:9090'

//******************************  EMPLEADO  ****************************** */  
//localhost:8080/empleado/7002------------------------------------ BUSCA por id (ci) empleado--MIS DATOS
getEmpleados(){
  return this.http.get<Empleado[]>(this.Url+"/empleado");
}


//localhost:8080/empleado/login/evargas/123 ---------------------- PARA login 
  getEmpleadoLogin(usuario:String, contrasena:String){
    return this.http.get<Empleado>(this.Url+"/empleado/login/"+usuario+"/"+contrasena+"/");
  }
 
//localhost:8080/empleado/7002------------------------------------ BUSCA por id (ci) empleado--MIS DATOS
  getEmpleadoCi(ci:String){
    return this.http.get<Empleado>(this.Url+"/empleado/"+ci);
  }
  getEmpleadoCi2(ci:number){
    return this.http.get<Empleado>(this.Url+"/empleado/"+ci);
  }

//localhost:8080/empleado----------------------------------------- CREA y/o ACTUALIZA empleado
  postEmpleado(empledo:Empleado){
    return this.http.post<Empleado>(this.Url+"/empleado",empledo);
  }

//******************************  CATEGORIA  ****************************** */
//localhost:8080/categoria -----------------------------------BUSCA todas las categorias
getCategorias(){
  return this.http.get<Categoria[]>(this.Url+"/categoria");
}
//localhost:8080/categoria/1----------------------------------BUSCA por id
getCategoriasid(idcategoria:String){
  return this.http.get<Categoria>(this.Url+"/categoria/"+idcategoria);
}

//getCategoriasid2(idcategoria:number){   return this.http.get<Categoria>(this.Url+"/categoria"+idcategoria); }

//localhost:8080/categoria----------------------------------------- CREA y/o ACTUALIZA 
postcategoria(categoria:Categoria){
  return this.http.post<Categoria>(this.Url+"/categoria",categoria);
}
//localhost:8080/categoria/activos/si------------------------------ BUSCA todas las categorias activas
getCategoriasActivas(){
  return this.http.get<Categoria[]>(this.Url+"/categoria/activos/si/");
}



//******************************  PRODUCTO  ****************************** */

//localhost:8080/producto/4 --------------------------------------busca un producto por id
getProductoid(idproducto:String){
  return this.http.get<Producto>(this.Url+"/producto/"+idproducto);
}


//localhost:8080/producto/activos/3------------------------------ Lista productos activos de una categoria
getProductosCategoria(idcategoriaproducto:String){
  return this.http.get<Producto[]>(this.Url+"/producto/activos/"+idcategoriaproducto);
}

//localhost:8080/producto/order-----------------------------------todos los productos ordenados por categoria
getProductosOrder(){
  return this.http.get<Producto[]>(this.Url+"/producto/order");
}

//localhost:8080/producto/-------------------------------------------CREA y/o Actualiza
postProducto(producto:Producto){
  return this.http.post<Producto>(this.Url+"/producto",producto);
}




//******************************  PEDIDO ****************************** */
//localhost:8080/pedido/--------------------------------------- CREA y/o ACTUALIZA pedido
postPedido(pedido:Pedido){
  return this.http.post<Pedido>(this.Url+"/pedido",pedido);
}
//localhost:8080/pedido/maximo---------------------------------devuele max(idpedido)
//localhost:8080/pedido/qmax
getPedidoMax(){
  return this.http.get<Pedido>(this.Url+"/pedido/qmax");
}
//localhost:9090/pedido/167 ------------------------------------ BUSCA un pedido por id
getPedidoId(idpedido:Number){
  return this.http.get<Pedido>(this.Url+"/pedido/"+idpedido);
}



//******************************  PEDIDOproducto ****************************** */

//localhost:9090/pedidoproducto/busca/129/2 ---------------------- BUSCA si exite por idpedido and  idproducto en pedidoproducto
getPedidoproductoExiste(idpedido:Number, idproducto:Number){
  return this.http.get<Pedidoproducto>(this.Url+"/pedidoproducto/busca/"+idpedido+"/"+idproducto+"/");
}

//localhost:9090/pedidoproducto   --------------------------------- CREA y/o ACTUALIZA tupla de pedidoproducto 
postPedidoproducto(pedidoproducto:Pedidoproducto){
  return this.http.post<Pedidoproducto>(this.Url+"/pedidoproducto",pedidoproducto);
}
//localhost:9090/pedidoproducto/carrito/136 ----------------------- OBTIENE los productos para el carrito por idpedido
getCarrito(idpedido:Number){
  return this.http.get<Pedidoproducto[]>(this.Url+"/pedidoproducto/carrito/"+idpedido);
}

//localhost:9090/pedidoproducto/61 -------------------------------- ELIMINA registro de carrito por Id pedidoproducto
deletePedidoproductoId(pedidoproducto:Pedidoproducto){
  return this.http.delete<Pedidoproducto>(this.Url+"/pedidoproducto/"+pedidoproducto.id);
}

//localhost:9090/pedidoproducto/carrito/total/137 ------------------ OBTIENE la cantidad total y el precio total del pedido
getCarritoTotal(idpedido:Number){
  return this.http.get<Pedidoproducto>(this.Url+"/pedidoproducto/carrito/total/"+idpedido);
}




//******************************  CLIENTE  ****************************** */
//localhost:9090/cliente/1 ------------------------------------------  BUSCA cliente por id
getClienteId(ci:number){
  return this.http.get<Cliente>(this.Url+"/cliente/"+ci);
}

//localhost:9090/cliente -------------------------------------------- CREA y/o ACTUALIZA tupla de Cliente
postCliente(cliente:Cliente){
  return this.http.post<Cliente>(this.Url+"/cliente",cliente);
}




//******************************  FACTURA  ****************************** */
//localhost:9090/pago/factura ---------------------------------------- OBTIENE el ultimo numero de factura
getNumeroFacturaMax(){
  return this.http.get<Pago>(this.Url+"/pago/factura");
}

//localhost:9090/pago  ----------------------------------------------- CREA pago
postPago(pago:Pago){
  return this.http.post<Pago>(this.Url+"/pago",pago);
}



//******************************  REPORTE CAJERO  ****************************** */
//localhost:9090/reporte/cajero/7010 -------------------------------- OBTIENE las ventas del dia del usuario cajero
getReporteDiaCajero(ci:String){
  return this.http.get<Reporteventas[]>(this.Url+"/reporte/cajero/"+ci);
}
//localhost:9090/reporte/cajerototales/7010 ------------------------- OBTIENE Total ventas del dia del usuario cajero
getReporteTotalesDiaCajero(ci:String){
  return this.http.get<Reportetotales[]>(this.Url+"/reporte/cajerototales/"+ci);
}

//******************************  REPORTE ADMIN  ****************************** */
//localhost:9090/reporte/admintotales/cajero ------------------------ OBTIENE las ventas del dia POR cajero
getReporteTotalesDiaPorCajeroAdmin(){
  return this.http.get<Reportetotales[]>(this.Url+"/reporte/admintotales/cajero");
}
//localhost:9090/reporte/admintotales ------------------------------- OBTIENE las ventas totales SUMADAS del dia 
getReporteTotalesDiaAdmin(){
  return this.http.get<Reportetotales[]>(this.Url+"/reporte/admintotales");
}
//localhost:9090/reporte/admintotales/producto ---------------------- OBTIENE ventas por porducto del dia
getReporteDiaAdmin(){
  return this.http.get<Reporteventas[]>(this.Url+"/reporte/admintotales/producto");  
}

/**************** fecha*/
//localhost:9090/reporte/admintotales/cajero/2022-06-01/2022-06-31 -- OBTIENE las ventas POR cajero desde fechaA  y fechaB
getReporteTotalesFechasPorCajeroAdmin(fechaA:String, fechaB:String){
  return this.http.get<Reportetotales[]>(this.Url+"/reporte/admintotales/cajero/"+fechaA+"/"+fechaB);
}


//localhost:9090/reporte/admintotales/2022-06-01/2022-06-31---------- OBTIENE las ventas totales SUMADAS desde fechaA y fechaB 
getReporteTotalFechasAyBAdmin(fechaA:String, fechaB:String){
  return this.http.get<Reportetotales[]>(this.Url+"/reporte/admintotales/"+fechaA+"/"+fechaB);
}

//localhost:9090/reporte/admintotales/fechas/producto/2022-06-01/2022-06-31 --------------- OBTIENE  ventas por producto desde fechaA y fechaB 
getReporteFechasAdmin(fechaA:String, fechaB:String){
  return this.http.get<Reporteventas[]>(this.Url+"/reporte/admintotales/fechas/producto/"+fechaA+"/"+fechaB);  
}




}
