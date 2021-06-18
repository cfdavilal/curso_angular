import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from './listado-personas/Persona.model';
import { LoggingService } from './loggingService.service';

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
}
