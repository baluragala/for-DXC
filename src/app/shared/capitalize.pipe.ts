import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, position:number,append:string): string {
    console.log(value);
    try{
    if(position)
      throw Error('Someting is wrong');
    }catch(err){

    }
    return value.charAt(position-1).toUpperCase() + append
  }

}
