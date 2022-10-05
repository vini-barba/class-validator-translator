import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function NotContains(args: ValidationArguments) {
  return i18n.__('NotContains', {
    property: args.property,
    constraint: args.constraints[0],
  });
}
