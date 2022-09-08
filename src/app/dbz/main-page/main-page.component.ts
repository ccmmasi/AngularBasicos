import { Component } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
 
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
     
  MP_nuevo: IPersonaje = {
    nombre: 'Maestro Roshi',
    poder: 300
  }
 
  constructor() { 
  }
}
