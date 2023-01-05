import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Page404Component } from './page404/page404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';

const routes: Routes = [
  {path: '', component: TitulosComponent}, // Pagina por defecto
  {path: 'pipes', component: PipesComponent},
  {path: 'ejemplo', component: EjemploComponent},
  {path: '**', component: Page404Component} // Pagina por omision
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
