import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function ArrayMinSize(args: ValidationArguments) {
  return i18n.__mf('ArrayMinSize', {
    N: args.constraints[0],
    property: args.property,
    constraint: args.constraints[0],
  });
}
