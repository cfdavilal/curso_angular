import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  private nombre: string = 'Juan';
  private apellido: string = 'Perez';
  private edad: number = 28;

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }
}
