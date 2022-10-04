import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function IsEnum(args: ValidationArguments) {
  return i18n.__('IsEnum', {
    property: args.property,
  });
}
