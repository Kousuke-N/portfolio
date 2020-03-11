import { NgModule } from "@angular/core";
import { MomentDatePipe } from './moment-date/moment-date.pipe';

@NgModule({
  declarations: [MomentDatePipe],
  exports: [MomentDatePipe]
})
export class PipesModule {}
