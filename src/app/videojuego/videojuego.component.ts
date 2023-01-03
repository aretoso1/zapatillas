import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html' 
	 

})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

       public titulo: string;
       public listado: string;
	
	constructor(){

	      this.titulo='Bienvenido al curso';
	      this.listado= 'Estos son los mejores juego de los 2022';

	      console.log('Se ha cargado el componente videojuego.component.ts')
	      
	}

	ngOnInit(){

	console.log(' Se ha cargado el OnInt');
	}

	ngDoCheck(){

	console.log('Docheck ejecutado');
	}

	ngOnDestroy(){
	  console.log('OnDestroy ejecutado');


	}

	cambiarTitulo(){

	this.titulo='Nuevo títtulo de la componente';
	}


}

