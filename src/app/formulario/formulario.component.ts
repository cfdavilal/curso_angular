import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../listado-personas/Persona.model';
import { LoggingService } from '../loggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [PersonasService],
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  constructor(
    private LoggingService: LoggingService,
    private personasService: PersonasService
  ) {
    /*     this.personasService.saludar.subscribe(
      (indice: number) => alert('sdfsd')
    ); */
    this.personasService.saludar.subscribe((indice: number) =>
      alert('hola we')
    );
  }

  ngOnInit(): void {}

  agregarPersona() {
    let nueva_persona = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    this.LoggingService.enviaMensajeAConsola(
      'Enviamos a la persona: ' +
        nueva_persona.nombre +
        ' ' +
        nueva_persona.apellido
    );
    this.personaCreada.emit(nueva_persona);
    //this.personasService.agregarPersona(nueva_persona)
  }
}
