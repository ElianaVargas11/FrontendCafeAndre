import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Componentes/admin/admin.component';
import { AdmincategoriasComponent } from './Componentes/admincategorias/admincategorias.component';
import { AdmincategoriaseditarComponent } from './Componentes/admincategoriaseditar/admincategoriaseditar.component';
import { AdmincategoriasnuevoComponent } from './Componentes/admincategoriasnuevo/admincategoriasnuevo.component';
import { AdminmesasComponent } from './Componentes/adminmesas/adminmesas.component';
import { AdminmisdatosComponent } from './Componentes/adminmisdatos/adminmisdatos.component';
import { AdminproductosComponent } from './Componentes/adminproductos/adminproductos.component';
import { AdminproductoseditarComponent } from './Componentes/adminproductoseditar/adminproductoseditar.component';
import { AdminproductosnuevoComponent } from './Componentes/adminproductosnuevo/adminproductosnuevo.component';
import { AdminrepofechaComponent } from './Componentes/adminrepofecha/adminrepofecha.component';
import { AdminrepofecharecaudadoComponent } from './Componentes/adminrepofecharecaudado/adminrepofecharecaudado.component';
import { AdminreportediarioComponent } from './Componentes/adminreportediario/adminreportediario.component';
import { AdminreportediariorecaudadoComponent } from './Componentes/adminreportediariorecaudado/adminreportediariorecaudado.component';
import { AdminreportesComponent } from './Componentes/adminreportes/adminreportes.component';
import { AdminusuarioeditarComponent } from './Componentes/adminusuarioeditar/adminusuarioeditar.component';
import { AdminusuarionuevoComponent } from './Componentes/adminusuarionuevo/adminusuarionuevo.component';
import { AdminusuariosComponent } from './Componentes/adminusuarios/adminusuarios.component';
import { CajeroComponent } from './Componentes/cajero/cajero.component';
import { CajeromisdatosComponent } from './Componentes/cajeromisdatos/cajeromisdatos.component';
import { CajeropedidosComponent } from './Componentes/cajeropedidos/cajeropedidos.component';
import { CajeropedidoscanceladoComponent } from './Componentes/cajeropedidoscancelado/cajeropedidoscancelado.component';
import { CajeropedidospagoComponent } from './Componentes/cajeropedidospago/cajeropedidospago.component';
import { CajeropedidospagofacturaComponent } from './Componentes/cajeropedidospagofactura/cajeropedidospagofactura.component';
import { CajeroreportediarioComponent } from './Componentes/cajeroreportediario/cajeroreportediario.component';
import { CajeroreportefechasComponent } from './Componentes/cajeroreportefechas/cajeroreportefechas.component';
import { CajeroreporteventasComponent } from './Componentes/cajeroreporteventas/cajeroreporteventas.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { LogoutComponent } from './Componentes/logout/logout.component';

const routes: Routes = [
  // aca se colocan todos los componetes que utilizamos
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'home',component:HomeComponent},

  {path:'admin', component:AdminComponent},
  {path:'adminmisdatos', component:AdminmisdatosComponent},  
  {path:'adminmesas', component:AdminmesasComponent},
  
  {path:'admincategorias', component:AdmincategoriasComponent},
  {path:'admincategoriaseditar', component:AdmincategoriaseditarComponent},
  {path:'admincategoriasnuevo', component:AdmincategoriasnuevoComponent},

  {path:'adminproductos', component:AdminproductosComponent},
  {path:'adminproductoseditar', component:AdminproductoseditarComponent},
  {path:'adminproductosnuevo', component:AdminproductosnuevoComponent},
  
  {path:'adminusuarios', component:AdminusuariosComponent},
  {path:'adminusuarioeditar', component:AdminusuarioeditarComponent},
  {path:'adminusuarionuevo',component:AdminusuarionuevoComponent},

  {path:'adminreportes', component:AdminreportesComponent},
  {path:'adminreportediario', component:AdminreportediarioComponent},
  {path:'adminreportediariorecaudado', component:AdminreportediariorecaudadoComponent},
  {path:'adminrepofecha', component:AdminrepofechaComponent},
  {path:'adminrepofecharecaudado', component:AdminrepofecharecaudadoComponent},
  
//------------------------------------------------------------------- cajero
  {path:'cajero', component:CajeroComponent},
  {path:'cajeromisdatos', component:CajeromisdatosComponent},  
  {path:'cajeropedidos', component:CajeropedidosComponent},
  {path:'cajeropedidoscancelado', component:CajeropedidoscanceladoComponent},
  {path:'cajeropedidospago', component:CajeropedidospagoComponent},
  {path:'cajeropedidospagofactura', component:CajeropedidospagofacturaComponent},

  {path:'cajeroreportediario', component:CajeroreportediarioComponent},
  {path:'cajeroreportefechas', component:CajeroreportefechasComponent},
  {path:'cajeroreporteventas', component:CajeroreporteventasComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
