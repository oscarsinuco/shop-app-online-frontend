import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../componentes/explore-container/explore-container.module';
import { MarcaComponent } from '../componentes/marca/marca.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CategoriaComponent } from '../componentes/categoria/categoria.component';
import { MenuVerticalComponent } from '../componentes/menu-vertical/menu-vertical.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, MarcaComponent, CategoriaComponent, MenuVerticalComponent]
})
export class Tab1PageModule {}
