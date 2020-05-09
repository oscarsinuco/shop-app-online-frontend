import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MarcaComponent } from '../marca/marca.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CategoriaComponent } from '../categoria/categoria.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, MarcaComponent, CategoriaComponent]
})
export class Tab1PageModule {}
