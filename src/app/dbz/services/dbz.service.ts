import { Injectable } from "@angular/core";
import { IPersonaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    
  _LPersonajes: IPersonaje[] = [
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 7500
      },
      {
        nombre: 'Krillin',
        poder: 500
      }
    ];
  
    get LPersonajes(): IPersonaje[] {
      return [...this._LPersonajes];
    }

    constructor() {}

    agregarPersonaje(personajeEntrante: IPersonaje) {
      this._LPersonajes.push(personajeEntrante);
    }
}