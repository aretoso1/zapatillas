import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public cursoo: string;
  public nombre: string;
  public followers: number;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) { 
    this.nombre="";
    this.followers=0;
    this.cursoo="Esto es pura programación";
  }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.nombre= params.nombre;
      this.followers=+params.followers;
      console.log(this.nombre);
      console.log(typeof +params.followers);

      if(this.nombre=='ninguno'){
        this._router.navigate(['/home'] );

      }

    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas'] );
  }

}
