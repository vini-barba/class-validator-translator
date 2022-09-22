import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function IsAlpha(args: ValidationArguments) {
  return i18n.__('IsAlpha', {
    property: args.property,
  });
}
