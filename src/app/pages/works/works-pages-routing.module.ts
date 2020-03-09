import { Routes, RouterModule } from "@angular/router";
import { WorksListComponent } from './works-list/works-list.component';
import { WorksDetailComponent } from './works-detail/works-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: WorksListComponent,
  },
  {
    path: ':id',
    component: WorksDetailComponent,
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksPagesRoutingModule{}
