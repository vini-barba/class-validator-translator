import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function isPhoneNumber(args: ValidationArguments) {
  return i18n.__('isPhoneNumber', {
    property: args.property,
  });
}
