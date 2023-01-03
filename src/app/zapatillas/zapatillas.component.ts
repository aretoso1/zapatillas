import {Component, OnInit} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
import {ZapatillaService} from '../service/zapatilla.service';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {
	public titulo: string= 'Componente Zapatillas';
	public zapatillas?: Array<Zapatilla>;
	public marcas: String[];
	public color: string;
	public mi_marca:string;
	
	constructor(
	  private _zapatillaService: ZapatillaService
	){
	this.marcas= new Array();
	this.mi_marca= "two-way data binding";
	this.color='blue';

	    
	}

	ngOnInit(){
	    alert(this._zapatillaService.getTexto());
	    this.zapatillas=this._zapatillaService.getZapatillas();
	    this.getMarcas();

	}

	getMarcas(){
	this._zapatillaService.getZapatillas().forEach((zapatilla, index)=>{
	     if(this.marcas.indexOf(zapatilla.nombre)<0){
	     this.marcas.push(zapatilla.nombre);

	     }
	});

	console.log(this.marcas);

	}

	getMarca(){
	alert(this.mi_marca);
	}

	addMarca(){
	this.marcas.push(this.mi_marca);
	}

	borrarMarca(index:any){
	   //delete this.marcas[index];
	   this.marcas.splice(index,1);
	}

	onBlur(){
	  console.log('Has salido del input');
	}
}