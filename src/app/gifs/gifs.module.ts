import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GifsPageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifCardComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    SharedModule,
  ]
})
export class GifsModule { }
