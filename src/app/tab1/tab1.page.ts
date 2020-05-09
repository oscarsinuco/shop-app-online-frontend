import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  marcas = {
    slidesPerView: 1.6,
    breakpoints:{
      '@0.75':{
        slidesPerView: 2,
        spaceBetween: 20
      },
      '@1.20':{
        slidesPerView: 3,
        spaceBetween: 40
      },
      '@1.80':{
        slidesPerView: 4,
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
    slidesPerView: 4.4,
    freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  constructor() {}

}
