import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ListadoPersonaComponent } from './listado-persona/listado-persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormCalculadoraComponent } from './form-calculadora/form-calculadora.component';
import { ResultadoCalculadoraComponent } from './resultado-calculadora/resultado-calculadora.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { HeaderComponent } from './presupuesto/header/header.component';
import { FormPresupuestoComponent } from './presupuesto/form-presupuesto/form-presupuesto.component';
import { IngresosComponent } from './presupuesto/ingresos/ingresos.component';
import { EgresosComponent } from './presupuesto/egresos/egresos.component';
import { PresupuestoComponent } from './presupuesto/presupuesto/presupuesto.component';

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
    PresupuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Necesario para el Two Way binding
  ],
  providers: [LoggingService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
