import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cajeropedidoscancelado',
  templateUrl: './cajeropedidoscancelado.component.html',
  styleUrls: ['./cajeropedidoscancelado.component.css']
})
export class CajeropedidoscanceladoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(["cajeropedidos"]);
  }

}
