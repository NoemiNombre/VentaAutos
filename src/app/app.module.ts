import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './paginas/lista-autos/lista-autos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AutomovilesModule } from './servicios/automoviles/automoviles.module';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AutosDetailComponent } from './componentes/autosDetail/autosDetail.component';
import { HomepageComponent } from './paginas/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TablaComponent,
    AutosDetailComponent,
    ListaAutosComponent,
    HomepageComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutomovilesModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
FormularioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
