import { Component, OnInit } from '@angular/core';
import { Persona } from './Persona.model';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent implements OnInit {
  public titulo: string = 'Listado de Personas';
  public personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Carla', 'Lara'),
  ];
  nombre_input: string = '';
  apellido_input: string = '';

  constructor() {}

  ngOnInit(): void {}

  agregarPersona(){
    this.personas.push(new Persona(this.nombre_input, this.apellido_input))
  }
}
