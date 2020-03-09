import { NgModule } from "@angular/core";
import { IntroductionComponent } from './introduction.component';
import { CommonModule } from '@angular/common';
import { IntroductionPagesRoutingModule } from './introduction-pages-routing.module';
import { ComponentsModule } from '@/components/components.module';

@NgModule({
  declarations: [IntroductionComponent],
  imports: [CommonModule, ComponentsModule, IntroductionPagesRoutingModule],
})
export class IntroductionPagesModule {}
