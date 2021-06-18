import { Component } from '@angular/core';

@Component({
  selector: 'app-personas', //nombre del componente
  templateUrl: './personas.component.html', //url del template html
  styleUrls: ['./personas.component.css'],//css en archivo separado
  /*   styles: [ //css oneline
    `
      h1 {
        color: blue;
      }
    `,
  ], */
})
export class PersonasComponent {
  desabilitar: boolean = false
  clase_boton: string = 'btn btn-success'
  mensaje: string = ''
  titulo: string = 'Ingeniero'
  mostrar: boolean = false
  agregarPersona(){
    this.mensaje = 'Persona agregada'
    this.mostrar = !this.mostrar 
  }

  //event binding
/*   modificarTitulo(event: Event){
    this.titulo = (<HTMLInputElement>event.target).value
  } */
}
