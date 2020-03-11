import { Pipe, PipeTransform } from '@angular/core';
import moment from '@/libs/moment';

@Pipe({
  name: 'momentDate'
})
export class MomentDatePipe implements PipeTransform {

  transform(value: Date | string, format: string): string {
    if (!value) {
      return '';
    }
    return moment(value).format(format);
  }

}
