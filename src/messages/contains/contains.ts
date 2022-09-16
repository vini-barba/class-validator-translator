import { ValidationArguments } from 'class-validator';
import { i18n } from '../../config/i18n';
import { langs } from '../../config/langs';

export function Contains(lang: langs, args: ValidationArguments) {
  i18n.setLocale(lang);
  return i18n.__('Contains', {
    property: args.property,
    constraint: args.constraints[0],
  });
}
