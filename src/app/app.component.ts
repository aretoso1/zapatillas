import { Component } from '@angular/core';
import {Configuracion} from './models/configuracion';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Aprendiendo Angular desde 0';
  public descripcion:string;
  public mostrar_videojuegos: boolean=true;
  public config;

  constructor(){
     this.config= Configuracion;
     this.title=Configuracion.titulo;
     this.descripcion=Configuracion.descripcion;

  }

  ocultarVideojuegos( val:any ){
     this.mostrar_videojuegos= val ;
  }
}
