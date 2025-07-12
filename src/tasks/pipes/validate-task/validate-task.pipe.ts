import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateTaskPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)

    // estoy recibiendo el age string y lo converti a number 
    const ageNumber = parseInt(value.age.toString(), 10);

    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number',HttpStatus.BAD_REQUEST);
    }

    return {...value, age:ageNumber};

    return value;
  }
}
