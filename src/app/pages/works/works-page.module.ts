import { NgModule } from "@angular/core";
import { WorksDetailComponent } from './works-detail/works-detail.component';
import { WorksListComponent } from './works-list/works-list.component';
import { WorksPagesRoutingModule } from './works-pages-routing.module';
import { ComponentsModule } from '@/components/components.module';

@NgModule({
  declarations: [WorksDetailComponent,WorksListComponent],
  imports: [WorksPagesRoutingModule, ComponentsModule]
})
export class WorksPagesModule{}
