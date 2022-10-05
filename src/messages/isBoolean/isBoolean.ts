import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function IsBoolean(args: ValidationArguments) {
  return i18n.__('IsBoolean', {
    property: args.property,
  });
}
