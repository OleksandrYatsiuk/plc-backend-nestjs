import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';
@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private _schema: ObjectSchema) { }
  transform(value: any, metadata: ArgumentMetadata) {
      const { error } = this._schema.validate(value, { abortEarly: false });
      if (error) {
        throw new BadRequestException(error.details.map(e => ({ result: e.message, field: e.context.key })));
      }
      return value;
  }
}
