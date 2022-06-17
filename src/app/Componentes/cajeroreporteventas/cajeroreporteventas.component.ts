import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Reporteventas } from 'src/app/Modelo/Reporteventas';
import { ServiceService } from 'src/app/Service/service.service';

//-------graficos
import { ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import  * as pluginsDatalabels  from 'chartjs-plugin-annotation';
import  * as Label  from 'ng2-charts'

//-------


@Component({
  selector: 'app-cajeroreporteventas',
  templateUrl: './cajeroreporteventas.component.html',
  styleUrls: ['./cajeroreporteventas.component.css']
})
export class CajeroreporteventasComponent implements OnInit {


  //-------------
  //datos!: number[];
  //datos!: number[] ;
  //public polarAreaChartData!: ChartData<'polarArea'>;
  
  constructor(private cookiesSvc:CookieService, private service:ServiceService, private router:Router ) { }
  ngOnInit(): void {}

  generarReporteDiario(){
    this.router.navigate(["cajeroreportediario"]);
  }

  generarReporteEntreFechas(){
    this.router.navigate(["cajeroreportefechas"]);
  }



  /*
  ngOnInit(): void {
    this.reporteDelDiaCajero();
    //this.changeLegendPosition();   
    this.cargarDatos(); 

  }




  reporteventas!: Reporteventas[];
  cargarReporteDatos!: Reporteventas[];
  //------------- Datos graficos
  repoProductos:any=[];
  repoCantidad:any=[];
  public repoxzencantidad = [];
  public dato!: string;

  reporteDelDiaCajero(){
    this.service.getReporteDiaCajero(this.cookiesSvc.get('usuario_id'))
    .subscribe(data=>{ 
      this.reporteventas = data; 
      
    });
    
  }

  cargarDatos(){
    this.service.getReporteDiaCajero(this.cookiesSvc.get('usuario_id'))
    .subscribe(res=>{ 
      this.cargarReporteDatos = res; 
      console.log(this.repoProductos);
      console.log(this.cargarReporteDatos);      

      for (const cargarReporteDato of this.cargarReporteDatos) {
        
        this.polarAreaChartLabels?.push(""+cargarReporteDato.nombreproducto );
        this.datos?.push(+cargarReporteDato.totalcantidad);
        this.chart?.update();
      }
    });    
  }
   





public pushOne(): void {
    
  this.polarAreaChartLabels?.push(`nombre`);
  this.datos?.push(20);

  this.chart?.update();
}

 /******************************** GRAFICOS *************************************** */
/*  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
//*************************************************************************** / Pie
 // Pie

 // Polar
 polarAreaChartLabels: string[] = []; 
 datos: number[] = [];
// 

 public polarAreaChartData: ChartData<'polarArea'> = {
   labels: this.polarAreaChartLabels,
   datasets: [ 
     { data: this.datos   } ,        
   ]

 };

 
 public polarAreaLegend = true;

 public polarAreaChartType: ChartType = 'pie';

 // events
 public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }
 



/*
  changeLegendPosition(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
    }

    this.chart?.render();
  }

/**/


}
