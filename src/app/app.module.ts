import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { LogoutComponent } from './Componentes/logout/logout.component';
import { CajeroComponent } from './Componentes/cajero/cajero.component';
import { AdminComponent } from './Componentes/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { CajeromisdatosComponent } from './Componentes/cajeromisdatos/cajeromisdatos.component';
import { CajeropedidosComponent } from './Componentes/cajeropedidos/cajeropedidos.component';
import { CajeroreporteventasComponent } from './Componentes/cajeroreporteventas/cajeroreporteventas.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AdmincategoriasComponent } from './Componentes/admincategorias/admincategorias.component';
import { AdminproductosComponent } from './Componentes/adminproductos/adminproductos.component';
import { AdminusuariosComponent } from './Componentes/adminusuarios/adminusuarios.component';
import { AdminreportesComponent } from './Componentes/adminreportes/adminreportes.component';
import { AdminmisdatosComponent } from './Componentes/adminmisdatos/adminmisdatos.component';
import { AdminmesasComponent } from './Componentes/adminmesas/adminmesas.component';
import { AdminusuarioeditarComponent } from './Componentes/adminusuarioeditar/adminusuarioeditar.component';
import { AdminusuarionuevoComponent } from './Componentes/adminusuarionuevo/adminusuarionuevo.component';
import { AdmincategoriaseditarComponent } from './Componentes/admincategoriaseditar/admincategoriaseditar.component';
import { AdmincategoriasnuevoComponent } from './Componentes/admincategoriasnuevo/admincategoriasnuevo.component';
import { AdminproductoseditarComponent } from './Componentes/adminproductoseditar/adminproductoseditar.component';
import { AdminproductosnuevoComponent } from './Componentes/adminproductosnuevo/adminproductosnuevo.component';
import { CajeropedidospagoComponent } from './Componentes/cajeropedidospago/cajeropedidospago.component';
import { CajeropedidospagofacturaComponent } from './Componentes/cajeropedidospagofactura/cajeropedidospagofactura.component';
import { CajeropedidoscanceladoComponent } from './Componentes/cajeropedidoscancelado/cajeropedidoscancelado.component';

//Graficos
import { NgChartsModule } from 'ng2-charts';
import { CajeroreportediarioComponent } from './Componentes/cajeroreportediario/cajeroreportediario.component';
import { CajeroreportefechasComponent } from './Componentes/cajeroreportefechas/cajeroreportefechas.component';
import { AdminreportediarioComponent } from './Componentes/adminreportediario/adminreportediario.component';
import { AdminreportediariorecaudadoComponent } from './Componentes/adminreportediariorecaudado/adminreportediariorecaudado.component';
import { AdminrepofechaComponent } from './Componentes/adminrepofecha/adminrepofecha.component';
import { AdminrepofecharecaudadoComponent } from './Componentes/adminrepofecharecaudado/adminrepofecharecaudado.component';
//import { PolarChartComponent } from './Components/polar-chart/polar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    CajeroComponent,
    CajeromisdatosComponent,
    CajeropedidosComponent,
    CajeroreporteventasComponent,
    HomeComponent,
    AdmincategoriasComponent,
    AdminproductosComponent,
    AdminusuariosComponent,
    AdminreportesComponent,
    AdminmisdatosComponent,
    AdminmesasComponent,
    AdminusuarioeditarComponent,
    AdminusuarionuevoComponent,
    AdmincategoriaseditarComponent,
    AdmincategoriasnuevoComponent,
    AdminproductoseditarComponent,
    AdminproductosnuevoComponent,
    CajeropedidospagoComponent,
    CajeropedidospagofacturaComponent,
    CajeropedidoscanceladoComponent,
    CajeroreportediarioComponent,
    CajeroreportefechasComponent,
    AdminreportediarioComponent,
    AdminreportediariorecaudadoComponent,
    AdminrepofechaComponent,
    AdminrepofecharecaudadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    //graficos    
    NgChartsModule,
    FormsModule 
  ],
  providers: [CookieService,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
