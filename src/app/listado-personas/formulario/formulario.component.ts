import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Persona } from '../Persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [],
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  index: number;
  modoEdicion: number;
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  constructor(
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {
    /*     this.personasService.saludar.subscribe(
      (indice: number) => alert('sdfsd')
    ); */
    this.personasService.saludar.subscribe((indice: number) => alert('a'));
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = this.route.snapshot.queryParams['modoEdicion'];
  }

  ngAfterViewInit() {
    this.index = this.route.snapshot.params['id'];
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput.nativeElement.value = persona.nombre;
      this.apellidoInput.nativeElement.value = persona.apellido;
    }
  }

  agregarPersona() {
    let nueva_persona = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      this.personasService.modificarPersona(this.index, nueva_persona);
    } else {
      /*     this.LoggingService.enviaMensajeAConsola(
        'Enviamos a la persona: ' +
          nueva_persona.nombre +
          ' ' +
          nueva_persona.apellido
      ); */
      /*     this.personaCreada.emit(nueva_persona); */
      this.personasService.agregarPersona(nueva_persona);
    }
    this.router.navigate(['listapersonas']);
  }

  eliminarPersona(index: number) {
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      this.personasService.personas.splice(index, 1);
      this.router.navigate(['listapersonas']);
    }
  }
}
