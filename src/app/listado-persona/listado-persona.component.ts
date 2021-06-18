import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../listado-personas/Persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css'],
})
export class ListadoPersonaComponent implements OnInit {
  constructor(private personasService: PersonasService) {}

  ngOnInit(): void {}
  @Input() persona: Persona;
  @Input() indice: number;

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice)
    alert(this.personasService.personas[1].nombre)
  }
}
