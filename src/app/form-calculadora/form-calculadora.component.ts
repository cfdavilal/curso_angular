import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-calculadora',
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.css'],
})
export class FormCalculadoraComponent implements OnInit {
  public operandoA: number
  public operandoB: number
  @Output() resultadoSuma = new EventEmitter<number>()

  public getOperandoA(): number {
    return this.operandoA;
  }

  public setOperandoA(operandoA: number): void {
    this.operandoA = operandoA;
  }

  public getOperandob(): number {
    return this.operandoB;
  }

  public setOperandob(operandoB: number): void {
    this.operandoB = operandoB;
  }

  constructor() {}

  ngOnInit(): void {}
  sumar() {
    let res = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(res)
  }
}
