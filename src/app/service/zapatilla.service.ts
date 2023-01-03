import {Injectable} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
         public zapatillas: Array<Zapatilla>;

         

    constructor(){
      this.zapatillas=[
	       new Zapatilla('Tony Hawk', 'Emerica', 'azul',120,true),
	       new Zapatilla('Jordan', 'Nike', 'negras',60,false),
         new Zapatilla('Iverson', 'Reebok', 'rojas',25,true),
         new Zapatilla('Total 90', 'Nike', 'verdes',75,false),
	       new Zapatilla('Running', 'Adidas', 'Blanco',150,true),
         new Zapatilla('Botas', 'Jump', 'Roja',50,true)
	    ];
    }

    getTexto(){
      return "Bienvenido de nuevo";
    }

    getZapatillas(){
       return this.zapatillas;
    }
	
}