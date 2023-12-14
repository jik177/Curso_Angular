import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
  1º Binding stringInterpolation
  Unicamente declaramos las variables y son trasferidas
  directamente al entorno doctype
  */
  title = 'Edificaciones de ejecucion';
  

  /*
  2º Event Binding + importaciones de servicio (sweetaler2)
  */

  saludar(): void {
    /*alert ('Enhorabuena y bienvenido')
    Cualquier estructura o sentencia definida en js
    ngIf
    ngFor
    Validaciones
    Anidacion de funciones, click.....
    */
    Swal.fire({

      title: 'Enhorabuena a nuestro primera importacion-..! ',
      text: '¿Desea Continuar?',
      icon: 'question',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'green',
      color: 'black',
      footer: 'Continuará.....',
      background: '#eeee'
    });
  }

  /*
  3º Property Binding []
  [llamemos de ty al html a un elemento estará entre corchetes]
  (Si llamamos a un evento en html lo haremos entre parentesis)
  [()]
  */
  habilitado: boolean = true;
  // Para poder trasladar habilitado a html,necesito una estructura que 
  constructor() {
    //Un ambito ideal para crear tambien funciones o desarrollar estructuras de objetos, 
    //definir propiedades del objeto
    setTimeout(() => {
      this.habilitado = false
    }, 5000);


  }

  /*
  4º Two way Data Bindingin
  [()] En este tipo de construcciones aparece ya la direcctiva ngModel, asociada a otras que ya
  conocemos que permiten ejecuciones de estructura directamente en nuestro doctypè [(ngModel)]
  en definitiva dicha construccion dará como resultado la sincronizacion de las variables, datos,
  estructuras del lado de html y los de su modelo (a la referencia directa a su definicion en ts)
  Dicha directiva guardará el valor de la propiedad, siempre será susceptible de cambio y cierta
  interaccion del usuario
  */
  nombre: string = 'Antonio'
  apellido: string = 'Cuadrado'




  /*
  5º Data .this Binding
  */

  estilo = 'rojo';
  

 /*
 la variable estilo al asignarle una clase, comprende que dicha variable esta llamando a clases
 estilo2 = 'verde'; */

  /*
  Fin de la estructura Class
  */
}