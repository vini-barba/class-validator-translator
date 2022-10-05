import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function IsDecimal(args: ValidationArguments) {
  return i18n.__('IsDecimal', {
    property: args.property,
  });
}
