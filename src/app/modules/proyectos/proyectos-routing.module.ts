import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';
import { TareasComponent } from './tareas/tareas.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path: '', component: ProyectosComponent,children:[
  ]},
  {path:'proyecto/:id',component:TareasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
