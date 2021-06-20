import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './listado-personas/Persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  //Listar Personas
  cargarPersonas(): Observable<any> {
    return this.httpClient.get(
      'https://listado-personas-angular-da88d-default-rtdb.firebaseio.com/datos.json'
    );
  }
  //Guardar Personas
  guardarPeronas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listado-personas-angular-da88d-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      .subscribe(
        (response) => {
          console.log('resultado de guardar las Personas: ' + response);
        },
        (error) => {
          console.log('Error al guardar PErsonas: ' + error);
        }
      );
  }

  //Editar Personas
  ModificarPersona(index: number, persona: Persona) {
    let url: string;
    url =
      'https://listado-personas-angular-da88d-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json';
    this.httpClient.put(url, persona).subscribe(
      (response) => {
        console.log('Resultado de modificar persona:' + response);
      },
      (error) => {
        console.log('Error en modificar persona: ' + error);
      }
    );
  }
  //Eliminar Personas
  eliminarPersona(index: number) {
    let url: string;
    url =
      'https://listado-personas-angular-da88d-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json';
    this.httpClient.delete(url).subscribe(
      (response) => {
        console.log('Resultado de eliminar persona:' + response);
      },
      (error) => {
        console.log('Error en eliminar persona: ' + error);
      }
    );
  }
}
