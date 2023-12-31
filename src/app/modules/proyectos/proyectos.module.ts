import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { TareasComponent } from './tareas/tareas.component';
import { TareasFormComponent } from './tareas-form/tareas-form.component';


@NgModule({
  declarations: [
    ProyectosComponent,
    PrincipalComponent,
    TareasComponent,
    TareasFormComponent,
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule
  ]
})
export class ProyectosModule { }
