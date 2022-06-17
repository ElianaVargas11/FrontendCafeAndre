import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-admincategoriaseditar',
  templateUrl: './admincategoriaseditar.component.html',
  styleUrls: ['./admincategoriaseditar.component.css']
})
export class AdmincategoriaseditarComponent implements OnInit {

  categoria:Categoria = new Categoria();
  dato:String = new String(localStorage.getItem("idcategoria"))

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
     //let id =localStorage.getItem("ci");
  }
  
  Editar(){
    this.service.getCategoriasid(""+localStorage.getItem('idcategoria'))
    .subscribe(data=>{
      this.categoria = data;
    });
  }

  actualizar_categoria(categoria:Categoria){
    this.service.postcategoria(categoria)
    .subscribe(data=>{
      this.categoria=data;
      alert("Tus datos se actualizaron con Exito...!!!");      
      this.router.navigate(["admincategorias"]);
    });
  }

}
/*
function ConvertStringToNumber(input: string) {
  var numeric = Number(input);
  return numeric;
}*/