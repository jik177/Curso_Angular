import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

/*
    CARACTERISTICAS DEL MODULO
    A.Pieza estructural de unidad mas grande en la que se puede dividir una aplicacion
    B.Dichas estructuras podremos interactura sobre ellas, en mejorarlas, reutilizarlas, reciclarlas
    C.Diferentes tipos, por naturaleza de origen
      1. Nativos (Angular Material, https, Forms) 
      2. Terceros (sweetAler, Bootstrap) 
      3. Propios (?)
*/



import { NgModule } from '@angular/core';
/*
@NgModule : Palabra reservada, para la declaracion del modulo.
 Contiente 4 Arrays
 1.declarations: Listas delos componentes
 2.imports: Lista de los modulos
 3.providers Lista de servicios
 4.bootstrap: Componente de inicio, que es lo primero que muestra al desplegar
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
 Carpeta assets: Lugar de todos los archivos que conlleven configuracion o extensiones asociadas
 a imagenes, formatos digitales,...... 
*/