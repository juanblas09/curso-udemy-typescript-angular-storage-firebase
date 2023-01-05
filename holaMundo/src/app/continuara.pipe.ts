import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toString().length > 150){
      value = value.substring(0,110);
    }
    value += ", continua..."
    return value;
  }

}
