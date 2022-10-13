import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';

export default function Length(args: ValidationArguments) {
  const isMinLength =
    args.constraints[0] !== null && args.constraints[0] !== undefined;
  const isMaxLength =
    args.constraints[1] !== null && args.constraints[1] !== undefined;
  if (isMinLength && (!args.value || args.value.length < args.constraints[0])) {
    return i18n.__('LengthMin', {
      property: args.property,
      constraint: args.constraints[0],
    });
  }
  if (isMaxLength && args.value.length > args.constraints[1]) {
    return i18n.__('LengthMax', {
      property: args.property,
      constraint: args.constraints[1],
    });
  }

  return i18n.__('LengthEach', {
    property: args.property,
    constraint1: args.constraints[0],
    constraint2: args.constraints[1],
  });
}
