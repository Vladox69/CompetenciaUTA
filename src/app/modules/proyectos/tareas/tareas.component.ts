import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TareasFormComponent } from '../tareas-form/tareas-form.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  

  onCrear():void{
    const activeModal =this.modalService.open(TareasFormComponent, {
      centered: true,
      size: 'lg',
      keyboard: false,
    });
   
  }

  constructor(private modalService: NgbModal){}


}
