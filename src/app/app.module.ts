import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ListadoPersonaComponent } from './listado-personas/listado-persona/listado-persona.component';
import { FormularioComponent } from './listado-personas/formulario/formulario.component';
import { FormCalculadoraComponent } from './calculadora/form-calculadora/form-calculadora.component';
import { ResultadoCalculadoraComponent } from './calculadora/resultado-calculadora/resultado-calculadora.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { HeaderComponent } from './presupuesto/header/header.component';
import { FormPresupuestoComponent } from './presupuesto/form-presupuesto/form-presupuesto.component';
import { IngresosComponent } from './presupuesto/ingresos/ingresos.component';
import { EgresosComponent } from './presupuesto/egresos/egresos.component';
import { PresupuestoComponent } from './presupuesto/presupuesto/presupuesto.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListadoPersonasComponent,
    ListadoPersonaComponent,
    FormularioComponent,
    FormCalculadoraComponent,
    ResultadoCalculadoraComponent,
    HeaderComponent,
    FormPresupuestoComponent,
    IngresosComponent,
    EgresosComponent,
    PresupuestoComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Necesario para el Two Way binding
    HttpClientModule
  ],
  providers: [LoggingService, PersonasService, DataServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
