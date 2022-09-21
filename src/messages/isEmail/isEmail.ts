import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function IsEmail(args: ValidationArguments) {
  return i18n.__('IsEmail', {
    property: args.property,
    constraint: args.constraints[0],
  });
}
