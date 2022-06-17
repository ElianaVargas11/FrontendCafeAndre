import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adminreportes',
  templateUrl: './adminreportes.component.html',
  styleUrls: ['./adminreportes.component.css']
})
export class AdminreportesComponent implements OnInit {

  fechaA!:String;
  fechaB!:String;


  constructor(private cookiesSvc:CookieService, private service:ServiceService, private router:Router ) { }
  ngOnInit(): void {

  }

  generarReporteDiario(){
    this.router.navigate(["adminreportediario"]);
  }

  generarReporteEntreFechas(fechaA:String, fechaB:String){
    if(fechaA!) {
      if(fechaB!){
        this.cookiesSvc.set('fechaA', ""+fechaA);
        this.cookiesSvc.set('fechaB', ""+fechaB);
        
        this.router.navigate(["adminrepofecha"]);
      }
    } 

    
  }



}
