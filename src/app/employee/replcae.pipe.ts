import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replcae'
})
export class ReplcaePipe implements PipeTransform {

  transform(value: unknown, replaceValue: string): unknown {
    return replaceValue;
  }

}
