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

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListadoPersonasComponent,
    ListadoPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Necesario para el Two Way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
