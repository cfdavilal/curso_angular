import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ListadoPersonaComponent } from './listado-personas/listado-persona/listado-persona.component';
import { FormularioComponent } from './listado-personas/formulario/formulario.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PresupuestoComponent } from './presupuesto/presupuesto/presupuesto.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: ListadoPersonasComponent},
  {path: 'listapersonas', component: ListadoPersonasComponent, children: [
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent},
  ]},
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'presupuesto', component: PresupuestoComponent},
  {path: 'personas', component: PersonasComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
