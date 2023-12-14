import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*
FormsModule, será un recurso angular añade librerias formularios basados en plantilla configura
las directivas de ng ()
Importacion de proveedores (recursos) dicha importacion dentro del Módulo de confimguracion (@NgModule)
en sus importaciones añadiremos dicha libreria, que posteriormente se declarará como importacion
*/
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }