import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
  pure: false
})
export class SearchByPipe implements PipeTransform {

  transform(value: any, filterString: string, filterProp: string): unknown {
    if (value === null || filterString === '' || filterProp === ''){
      return value;
    }
    const res = [];
    for (const item of value){
      // const entry = item.get(filterProp).toLowerCase();
      const entry = item[filterProp].toLowerCase();
      if (entry.startsWith(filterString.toLowerCase())){
        res.push(item);
      }
    }
    // console.log(res);
    return res;
  }
}


