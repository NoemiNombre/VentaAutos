import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomovilesModule } from './servicios/automoviles/automoviles.module';
import { ListaAutosComponent } from './paginas/lista-autos/lista-autos.component';
import { AutosDetailComponent } from './componentes/autosDetail/autosDetail.component';
import { NotFoundComponent } from './componentes/notFound/notFound.component';
import { HomepageComponent } from './paginas/homepage/homepage.component';

const routes: Routes = 
[
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'automoviles',
    component: ListaAutosComponent
  },
  {
    path:'automoviles/:id',
    component: AutosDetailComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
