import { Component } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  marcas = {
    breakpoints: {
      0: {
        slidesPerView: 1.8,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 3.5,
        spaceBetween: 40
      },
      1000: {
        slidesPerView: 4.5,
        spaceBetween: 50
      },
    },
    freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  };
  categorias = {
    breakpoints: {
      0: {
        slidesPerView: 4.4,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 4.4,
        spaceBetween: 2
      },
      1000: {
        slidesPerView: 7.5,
        spaceBetween: 50
      },
    },
    freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  public categoriasArray: any;
  constructor(private peticiones: PeticionesService) {
    this.peticiones.getCategorias().then(response => {

      return response.json()

    }).then(data => {

      console.log(data)
      this.categoriasArray = data['categorias']
      
    })
  }

}
