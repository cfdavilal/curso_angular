import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCalculadoraComponent } from './resultado-calculadora.component';

describe('ResultadoCalculadoraComponent', () => {
  let component: ResultadoCalculadoraComponent;
  let fixture: ComponentFixture<ResultadoCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoCalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
