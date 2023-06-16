import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { TareasComponent } from './tareas/tareas.component';


@NgModule({
  declarations: [
    ProyectosComponent,
    PrincipalComponent,
    TareasComponent,
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule
  ]
})
export class ProyectosModule { }
