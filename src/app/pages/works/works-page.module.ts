import { NgModule } from "@angular/core";
import { WorksDetailComponent } from './works-detail/works-detail.component';
import { WorksListComponent } from './works-list/works-list.component';
import { WorksPagesRoutingModule } from './works-pages-routing.module';
import { ComponentsModule } from '@/components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WorksDetailComponent,WorksListComponent],
  imports: [CommonModule, WorksPagesRoutingModule, ComponentsModule]
})
export class WorksPagesModule{}
