import {NgModule} from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionContentComponent } from './introduction-content/introduction-content.component';
import { LinkComponent } from './link/link.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IntroductionContentComponent,
    FooterComponent,
    HeaderComponent,
    LinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IntroductionContentComponent,
    FooterComponent,
    HeaderComponent,
    LinkComponent
  ]
})
export class ComponentsModule {}
