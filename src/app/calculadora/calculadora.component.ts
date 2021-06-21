import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private titulo_calculadora: string = 'Aplicacion de Calculadora';

  public resultado: number = 0;

  public getTitulo_calculadora(): string {
    return this.titulo_calculadora;
  }

  public setTitulo_calculadora(titulo_calculadora: string): void {
    this.titulo_calculadora = titulo_calculadora;
  }

  public getResultado(): number {
    return this.resultado;
  }

  public setResultado(resultado: number): void {
    this.resultado = resultado;
  }

/*   modificarOperandoA(event: Event) {
    this.operandoA = parseInt((<HTMLInputElement>event.target).value);
  }
  modificarOperandoB(event: Event) {
    this.operandob = parseInt((<HTMLInputElement>event.target).value);
  } */

  nuevoResultado(nuevoRes: number){
    this.resultado = nuevoRes
  }

  constructor() {}

  ngOnInit(): void {}
}
