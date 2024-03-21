import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './paginas/lista-autos/lista-autos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AutomovilesModule } from './servicios/automoviles/automoviles.module';
import { FormComponent } from './componentes/form/form.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AutosDetailComponent } from './componentes/autosDetail/autosDetail.component';
import { HomepageComponent } from './paginas/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    TablaComponent,
    AutosDetailComponent,
   ListaAutosComponent,
   HomepageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutomovilesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
