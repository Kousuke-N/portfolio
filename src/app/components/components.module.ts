import {NgModule} from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionContentComponent } from './introduction-content/introduction-content.component';
import { LinkComponent } from './link/link.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkItemComponent } from './work-item/work-item.component';
import { PipesModule } from '@/pipes/pipes.module';

@NgModule({
  declarations: [
    IntroductionContentComponent,
    FooterComponent,
    HeaderComponent,
    LinkComponent,
    WorkItemComponent
  ],
  imports: [
    PipesModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    IntroductionContentComponent,
    FooterComponent,
    HeaderComponent,
    LinkComponent,
    WorkItemComponent
  ]
})
export class ComponentsModule {}
