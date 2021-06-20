import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-calculadora',
  templateUrl: './resultado-calculadora.component.html',
  styleUrls: ['./resultado-calculadora.component.css']
})
export class ResultadoCalculadoraComponent implements OnInit {
  @Input() resultadoSum: number
  constructor() { }

  ngOnInit(): void {
  }

}
