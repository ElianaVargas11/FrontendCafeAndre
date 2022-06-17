import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajeroComponent implements OnInit {

  constructor(private router:Router, private cookiesSvc:CookieService) { }

  ngOnInit(): void {
    this.router.navigate(["home"]);
  }

  home(){
    this.router.navigate(["home"]);
  }

  cajero_pedidos(){
    this.router.navigate(["cajeropedidos"]);
  }
  cajero_reporteventas(){
    this.router.navigate(["cajeroreporteventas"]);
  }
  cajero_misdatos(){
    this.router.navigate(["cajeromisdatos"]);
  }



}
