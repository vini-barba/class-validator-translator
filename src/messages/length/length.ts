import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function Length(args: ValidationArguments) {
  return i18n.__(
    // eslint-disable-next-line no-nested-ternary
    args.value.length < args.constraints[0]
      ? 'LengthMin'
      : args.value.length > args.constraints[1]
      ? 'LengthMax'
      : 'LenthBeetween',
    {
      property: args.property,
      constraint1: args.constraints[0],
      constraint2: args.constraints[1],
    },
  );
}
