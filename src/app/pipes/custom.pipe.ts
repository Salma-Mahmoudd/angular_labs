import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    return value.split('').reverse().join(args[0]);
  }
}
