import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from './listado-personas/Persona.model';
//import { LoggingService } from './loggingService.service';
import { LoggingService } from './LoggingService.service';

@Injectable()
export class PersonasService {
  public personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Carla', 'Lara'),
  ];

  saludar = new EventEmitter<number>();
  constructor(private LoggingService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
    this.LoggingService.enviaMensajeAConsola('' + this.personas);
  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index]
    return persona
  }

  modificarPersona(index:number,persona: Persona){
    let persona1 = this.personas[index]
    persona1.nombre = persona.nombre
    persona1.apellido = persona.apellido
  }
}
