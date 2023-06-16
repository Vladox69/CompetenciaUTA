import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TareasFormComponent } from '../tareas-form/tareas-form.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {


  onCrear(): void {
    const activeModal = this.modalService.open(TareasFormComponent, {
      centered: true,
      size: 'lg',
      keyboard: false,
    });

  }
  task = {
    nombre: '',
    descripcion: '',
    fecInicio: '',
    fecFin: '',
    estado: '',
    avance: '',
  }
  todo = [{
    nombre: 'Tarea 1',
    descripcion: 'Realizar la tarea 1',
    fecInicio: '22/06/2023',
    fecFin: '22/06/2023',
    estado: 'pendiente',
    avance: '0',
    persona:'Vladimir',
  },{
    nombre: 'Tarea 2',
    descripcion: 'Realizar la tarea 2',
    fecInicio: '24/06/2023',
    fecFin: '24/06/2023',
    estado: 'pendiente',
    avance: '0',
    persona:'Vladimir',
  } ];
  inProgres = [ {
    nombre: '',
    descripcion: '',
    fecInicio: '',
    fecFin: '',
    estado: '',
    avance: '',
    persona:'Vladimir'
  }];
  done = [ {
    nombre: '',
    descripcion: '',
    fecInicio: '',
    fecFin: '',
    estado: '',
    avance: '',
    persona:'Vladimir'
  }];


  drop(event: CdkDragDrop<any[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor(private modalService: NgbModal) { }


}
