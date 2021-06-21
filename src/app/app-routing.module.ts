import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ListadoPersonaComponent } from './listado-personas/listado-persona/listado-persona.component';
import { FormularioComponent } from './listado-personas/formulario/formulario.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PresupuestoComponent } from './presupuesto/presupuesto/presupuesto.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'listapersonas', component: ListadoPersonasComponent, canActivate: [LoginGuardian], children: [
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent},
  ]},
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'presupuesto', component: PresupuestoComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'login', component: LoginComponent},
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
