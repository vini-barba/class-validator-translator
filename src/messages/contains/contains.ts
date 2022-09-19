import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function Contains(args: ValidationArguments) {
  return i18n.__('Contains', {
    property: args.property,
    constraint: args.constraints[0],
  });
}
