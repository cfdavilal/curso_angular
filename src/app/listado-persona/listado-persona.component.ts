import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../listado-personas/Persona.model';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css'],
})
export class ListadoPersonaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() persona: Persona;
  @Input() indice: number;
}
