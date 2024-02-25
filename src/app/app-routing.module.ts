import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './router.routing';

const routes: Routes = [
  {
    path: AppRoutes.GIFS,
    loadChildren: () => import('./gifs/gifs.module').then(m => m.GifsModule)
  },
  {
    path: AppRoutes.ANY,
    redirectTo: AppRoutes.GIFS
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
