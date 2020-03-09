import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'introduction', loadChildren: () => import('@/pages/introduction/introduction-pages.module').then(m => m.IntroductionPagesModule)},
  {path: 'works', loadChildren: () => import('@/pages/works/works-page.module').then(m => m.WorksPagesModule)},
  {path: '', pathMatch: 'full', redirectTo: '/introduction'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
