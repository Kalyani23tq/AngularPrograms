import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPipe'
})
export class CustPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var str='';
    for(let i=value.length;i>=0;i--)
    {
        str=str+value.charAt(i);
    }
    return str;
  }

}
