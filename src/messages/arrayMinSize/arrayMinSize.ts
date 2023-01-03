import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function ArrayMinSize(args: ValidationArguments) {
  return i18n.__('ArrayMinSize', {
    property: args.property,
    constraint: args.constraints[0],
  });
}
