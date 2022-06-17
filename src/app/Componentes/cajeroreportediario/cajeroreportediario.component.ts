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
  selector: 'app-cajeroreportediario',
  templateUrl: './cajeroreportediario.component.html',
  styleUrls: ['./cajeroreportediario.component.css']
})
export class CajeroreportediarioComponent implements OnInit {

  reportetotales: Reportetotales[]=[];
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
    this.reporteDelDiaCajero();
    this.changeLegendPosition();   
    this.cargarDatos();     
    this.reporteDiaTotalesCajero();    
  }

  reporteDiaTotalesCajero(){
    this.service.getReporteTotalesDiaCajero(this.cookiesSvc.get('usuario_id'))
    .subscribe(data=>{ 
      this.reportetotales = data; 
      this.fecha_desde=""+data[0].fecha;
    });
    
  }


  reporteDelDiaCajero(){
    this.service.getReporteDiaCajero(this.cookiesSvc.get('usuario_id'))
    .subscribe(data=>{ 
      this.reporteventas = data;      
    });    
  }
  //parseFloat(valor).toFixed(2)
  cargarDatos(){
    this.service.getReporteDiaCajero(this.cookiesSvc.get('usuario_id'))
    .subscribe(res=>{ 
      this.cargarReporteDatos = res;     
      
      for (const cargarReporteDato of this.cargarReporteDatos) {
        this.polarAreaChartLabels?.push(""+cargarReporteDato.nombreproducto+" %" );
        this.datos?.push(+cargarReporteDato.xzencantidad);
        this.chart?.update();        
      }

      for (const cargarReporteDato2 of this.cargarReporteDatos2) {        
        this.datos?.push(+cargarReporteDato2.xzencantidad);
        this.chart?.update(this.barChartLabels);        
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


/*
  [data]="polarAreaChartData2"
  [legend]="polarAreaLegend2"
  [type]="polarAreaChartType2"
*/

 

 changeLegendPosition(): void {
  if (this.pieChartOptions?.plugins?.legend) {
    this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
  }

  this.chart?.render();
}





  
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

/*
  changeLegendPosition(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
    }

    this.chart?.render();
  }

/**/



public barChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.4
    }
  },
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {},
    y: {
      min: 20
    }
  },
  plugins: {
    legend: { display: true },
  }
};

public barChartLabels: string[] = [];

public barChartType: ChartType = 'bar';
public barChartLegend:boolean = true;


public barChartData: ChartData<'bar'> = {
  labels: this.barChartLabels,
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
   // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  ]
};



}
