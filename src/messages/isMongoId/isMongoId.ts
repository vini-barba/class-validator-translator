import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function IsMongoId(args: ValidationArguments) {
  return i18n.__('IsMongoId', {
    property: args.property,
    value: args.value,
  });
}
