import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private titulo_calculadora: string = 'Aplicacion de Calculadora';

  public operandoA: number = 0;
  public operandob: number = 0;
  public resultado: number = 0;

  public getTitulo_calculadora(): string {
    return this.titulo_calculadora;
  }

  public setTitulo_calculadora(titulo_calculadora: string): void {
    this.titulo_calculadora = titulo_calculadora;
  }

  public getOperandoA(): number {
    return this.operandoA;
  }

  public setOperandoA(operandoA: number): void {
    this.operandoA = operandoA;
  }

  public getOperandob(): number {
    return this.operandob;
  }

  public setOperandob(operandob: number): void {
    this.operandob = operandob;
  }

  public getResultado(): number {
    return this.resultado;
  }

  public setResultado(resultado: number): void {
    this.resultado = resultado;
  }

  sumar() {
    this.resultado = this.operandoA + this.operandob;
  }
/*   modificarOperandoA(event: Event) {
    this.operandoA = parseInt((<HTMLInputElement>event.target).value);
  }
  modificarOperandoB(event: Event) {
    this.operandob = parseInt((<HTMLInputElement>event.target).value);
  } */

  constructor() {}

  ngOnInit(): void {}
}
