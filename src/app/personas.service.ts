import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Persona } from './listado-personas/Persona.model';
//import { LoggingService } from './loggingService.service';
import { LoggingService } from './LoggingService.service';

@Injectable()
export class PersonasService {
  public personas: Persona[] = [];

  saludar = new EventEmitter<number>();
  constructor(
    private LoggingService: LoggingService,
    private dataServices: DataServices
  ) {}

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
    if (this.personas == null) {
      this.personas = [];
    }
    this.LoggingService.enviaMensajeAConsola('' + this.personas);
    this.dataServices.guardarPeronas(this.personas);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.ModificarPersona(index, persona1);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    //se vuelve a guardar arreglo
    this.modificarPersonas()
  }
  modificarPersonas() {
    if(this.personas !=null){
      this.dataServices.guardarPeronas(this.personas)
    }
  }

  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
}
