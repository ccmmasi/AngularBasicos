import { Component, Input } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {
  //@Input() P_LPersonajes: IPersonaje[]= [];

  get LPersonajes_Local() {
    return this.P_dbzService.LPersonajes;
  } 

  constructor(private P_dbzService: DbzService) {

  }
}
