import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../listado-personas/Persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>()

  nombre_input: string = '';
  apellido_input: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona(){
    let nueva_persona = new Persona(this.nombre_input, this.apellido_input)
    this.personaCreada.emit(nueva_persona)
  }
}
