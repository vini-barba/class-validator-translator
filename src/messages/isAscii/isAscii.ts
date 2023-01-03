import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function IsAscii(args: ValidationArguments) {
  return i18n.__('IsAscii', {
    property: args.property,
  });
}
