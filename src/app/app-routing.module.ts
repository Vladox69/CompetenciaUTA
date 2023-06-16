import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'proyectos', loadChildren: () => import('./modules/proyectos/proyectos.module').then(m => m.ProyectosModule) }, { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
