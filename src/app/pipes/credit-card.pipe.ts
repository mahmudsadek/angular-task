import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class CreditCardPipe implements PipeTransform {

  transform(cardNumber: string): string {
    let res:string = "";
    for(let i = 0; i < cardNumber.length; i++) {
      if(i % 4 == 0 && i != 0) {
        res += '-';
      }
      res += cardNumber[i];
    }
    console.log(res);
    return res;
  }
}
