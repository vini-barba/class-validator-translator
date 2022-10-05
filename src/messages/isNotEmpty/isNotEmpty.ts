import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function IsNotEmpty(args: ValidationArguments) {
  return i18n.__('IsNotEmpty', {
    property: args.property,
  });
}
