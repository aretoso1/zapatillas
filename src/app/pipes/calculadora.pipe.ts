import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform {
  transform(value: any, value_two:any) {

    //Explicación del pipe operaciones
    //dato | calculadora: otroDato
    //param1               param2
    
    let operaciones =` 
    Suma: ${value+value_two}
    Resta: ${value-value_two}
   Multiplicacion: ${value*value_two}
    division: ${value/value_two}

    
    
    `;

    return operaciones;
      
  }

}