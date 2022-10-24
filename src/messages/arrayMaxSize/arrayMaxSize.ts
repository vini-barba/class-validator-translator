import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function ArrayMaxSize(args: ValidationArguments) {
  return i18n.__mf('ArrayMaxSize', {
    N: args.constraints[0],
    property: args.property,
    constraint: args.constraints[0],
  });
}
