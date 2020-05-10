import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor() {

  }
  getCategorias() {
    return fetch(environment.api + '/categorias');
  }
}
