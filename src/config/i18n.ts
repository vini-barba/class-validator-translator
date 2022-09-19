import { I18n } from 'i18n';
import { join } from 'path';
import { langs } from './langs';

export const i18n = new I18n({
  locales: ['pt'],
  directory: join(__dirname, 'locales'),
  defaultLocale: langs.pt,
});
