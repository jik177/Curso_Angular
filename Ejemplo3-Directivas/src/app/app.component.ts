import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  alumnos: any =[

{valoracion:'alta',repetidor:false,nombre:'Alberto',apellido:'Sebastian',nota:7.5},
{valoracion:'media',repetidor:false,nombre:'Maria',apellido:'De las eras',nota:5.8},
{valoracion:'baja',repetidor:true,nombre:'Elena',apellido:'Arias',nota:3.1},
{valoracion:'media',repetidor:true,nombre:'Roberto',apellido:'Rodriguez',nota:4.1},
{valoracion:'baja',repetidor:false,nombre:'Javier',apellido:'Martin',nota:6.5},
{valoracion:'alta',repetidor:false,nombre:'Pimpinela',apellido:'Gonzalez',nota:8.2}
  ];


  
}