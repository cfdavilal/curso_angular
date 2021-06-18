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
import { LoggingService } from './loggingService.service';
import { PersonasService } from './personas.service';

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
    ResultadoCalculadoraComponent
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
