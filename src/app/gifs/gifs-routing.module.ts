import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../router.routing';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';

const routes: Routes = [
  {
    path: AppRoutes.EMPTY,
    component: GifsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
