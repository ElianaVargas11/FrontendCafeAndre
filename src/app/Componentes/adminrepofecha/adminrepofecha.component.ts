import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Reporteventas } from 'src/app/Modelo/Reporteventas';
import { ServiceService } from 'src/app/Service/service.service';
//-------graficos
import { ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import  * as pluginsDatalabels  from 'chartjs-plugin-annotation';
import  * as Label  from 'ng2-charts'
import { Reportetotales } from 'src/app/Modelo/Reportetotales';
//-------

@Component({
  selector: 'app-adminrepofecha',
  templateUrl: './adminrepofecha.component.html',
  styleUrls: ['./adminrepofecha.component.css']
})
export class AdminrepofechaComponent implements OnInit {

  fechaA:String= this.cookiesSvc.get('fechaA');
  fechaB:String= this.cookiesSvc.get('fechaB');
  
  reportetotales: Reportetotales[]=[];
  reportetotalessuma: Reportetotales[]=[];
  reporteventas: Reporteventas[]=[];
  cargarReporteDatos: Reporteventas[]=[];
  cargarReporteDatos2: Reporteventas[]=[];
  //------------- Datos graficos
  repoProductos:any=[];
  repoCantidad:any=[];
  fecha_desde!:String;  

  public repoxzencantidad = [];
  public dato!: string;

  pieChartOptions: any;

  constructor(private cookiesSvc:CookieService, private service:ServiceService, private router:Router) { }
  
  
  ngOnInit(): void {        
    this.reporteFechasSumaTotalesAdmin();
    this.reporteFechasTotalesAdmin();    
    this.reporteFechasAdmin();

    
    this.cargarDatos();        
    this.changeLegendPosition();   
  }


  reporteFechasTotalesAdmin(){
    this.service.getReporteTotalesFechasPorCajeroAdmin(this.cookiesSvc.get('fechaA'), this.cookiesSvc.get('fechaB'))
    .subscribe(data=>{ 
      this.reportetotales = data; 
      this.fecha_desde=""+data[0].fecha;
    });    
  }  
  reporteFechasSumaTotalesAdmin(){
    this.service.getReporteTotalFechasAyBAdmin(this.cookiesSvc.get('fechaA'), this.cookiesSvc.get('fechaB')) 
    .subscribe(data=>{ 
      this.reportetotalessuma = data; 
      this.fecha_desde=""+data[0].fecha;
    });
    
  }
  reporteFechasAdmin(){
    this.service.getReporteFechasAdmin(this.cookiesSvc.get('fechaA'), this.cookiesSvc.get('fechaB')) 
    .subscribe(data=>{ 
      this.reporteventas = data;      
    });    
  }

  /**/
  //parseFloat(valor).toFixed(2)
  cargarDatos(){
    this.service.getReporteFechasAdmin(this.cookiesSvc.get('fechaA'), this.cookiesSvc.get('fechaB')) 
    .subscribe(res=>{ 
      this.cargarReporteDatos = res;     
      
      for (const cargarReporteDato of this.cargarReporteDatos) {
        this.polarAreaChartLabels?.push(""+cargarReporteDato.nombreproducto+" %" );
        this.datos?.push(+cargarReporteDato.xzencantidad);
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
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
//*************************************************************************** / Pie
 // Pie

 // Polar
 polarAreaChartLabels: string[] = []; 
 datos: number[] = [];
// 


//-----------------------------------------------------------------
 public polarAreaChartData: ChartData<'polarArea'> = {
   labels: this.polarAreaChartLabels,
   datasets: [ 
     { data: this.datos   } ,        
   ]

 };
 
 public polarAreaLegend = true;
 public polarAreaChartType: ChartType = 'pie';



  
public pie(): void {
  this.polarAreaChartType = this.polarAreaChartType === 'pie' ? 'pie' : 'pie';
}  
public dona(): void {
  this.polarAreaChartType = this.polarAreaChartType === 'pie' ? 'doughnut' : 'doughnut';
}
public line(): void {
  this.polarAreaChartType = this.polarAreaChartType === 'pie' ? 'line' : 'line';
}
public polar(): void {
  this.polarAreaChartType = this.polarAreaChartType === 'pie' ? 'polarArea' : 'polarArea';
}
public barra(): void {
  this.polarAreaChartType = this.polarAreaChartType === 'pie' ? 'bar' : 'bar';
}

// events
public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}
public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

//
changeLegendPosition(): void {
  if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
  }
  this.chart?.render();
}

/**/


}
