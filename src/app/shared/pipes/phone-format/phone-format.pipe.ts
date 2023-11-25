import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phone: number, countryCode: string): string {
    let result: string;

    const numberString = phone.toString();
    const firstPart: string = numberString.slice(0,3);
    const secondPart: string = numberString.slice(3,6);
    const thirdPart: string = numberString.slice(6);

    if (countryCode.toUpperCase() === 'PL') {
      return result = `+48 ${firstPart} ${secondPart} ${thirdPart}`;
    } else {
      return 'Nieznany nr telefonu';
    }
  }
}
