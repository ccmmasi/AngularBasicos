import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html'
})

export class AgregarPersonajeComponent {
  
  @Input() AP_nuevo: IPersonaje = {
    nombre: '',
    poder: 0
  }  

  constructor(private dbzServiceLocal: DbzService) {
  }

  agregar() {
    if(this.AP_nuevo.nombre.trim().length === 0){
      return;
    } 

    this.dbzServiceLocal.agregarPersonaje(this.AP_nuevo);

    this.AP_nuevo = {
      nombre: '',
      poder: 0
    } 
  }
}
