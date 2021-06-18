import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Persona } from './Persona.model';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent implements OnInit {
  public titulo: string = 'Listado de Personas';
  public personas: Persona[] = []
  
  personaAgregada(persona: Persona) {
    this.personasService.agregarPersona(persona)
  }

  constructor(private personasService: PersonasService) {}

  ngOnInit(): void {
    this.personas = this.personasService.personas
  }
}
