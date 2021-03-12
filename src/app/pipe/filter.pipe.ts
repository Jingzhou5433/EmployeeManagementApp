import { Pipe, PipeTransform } from '@angular/core';
import {filter} from 'rxjs/operators';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === ''){
      return value;
    }
    let res = [];
    for (const item of value){
      if (item[propName] === filterString){
        res.push(item);
      }
    }
    return res;
  }

}
