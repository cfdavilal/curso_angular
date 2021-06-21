import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './listado-personas/Persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  //Listar Personas
  cargarPersonas(): Observable<any> {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(
      'https://listado-personas-angular-da88d-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
    );
  }
  //Guardar Personas
  guardarPeronas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://listado-personas-angular-da88d-default-rtdb.firebaseio.com/datos.json?auth=' +
          token,
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
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listado-personas-angular-da88d-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth='+token;
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
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listado-personas-angular-da88d-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth='+token;
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
