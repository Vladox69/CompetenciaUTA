import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  project={
    nombre:'',
    descripcion:'',
    fecInicio:'',
    fecFin:'',
  }

  projects=[
    {
      id:'PR1',
      nombre:'Proyecto 1',
      descripcion:'El proyecto numero 1',
      fecInicio:'22/07/2023',
      fecFin:'22/11/2023',
    },
    {
      id:'PR2',
      nombre:'Proyecto 2',
      descripcion:'El proyecto numero 2',
      fecInicio:'22/12/2023',
      fecFin:'22/04/2024',
    }
  ]

  onClickProject(id:any):void{
    this.router.navigate(['proyectos/proyecto',id])    
  }

  constructor(private router:Router){
    
  }

}
