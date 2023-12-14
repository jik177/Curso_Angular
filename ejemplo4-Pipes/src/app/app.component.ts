import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*
variables asociadas a otros lenguajes, el entorno de dichas variables
estarán acotadas por la dimension de acceso de su propio componente
declaracion de variables ⇓
*/

texto:string ='Bienvenidos a la primera fase de Angular';
numero:number = 7785.25643232;
porcentaje: number =0.526789;
fecha = new Date();
jsonObject ={nombre: 'Juan', edad:32, telefonos:{tel1:'916548547', tel2:915874512}}


}