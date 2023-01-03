import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function MaxLength(args: ValidationArguments) {
  return i18n.__('MaxLength', {
    property: args.property,
    constraint: args.constraints[0],
  });
}
