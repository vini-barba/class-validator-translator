import { I18n } from 'i18n';
import { join } from 'path';

export const i18n = new I18n({
  locales: ['pt'],
  directory: join(__dirname, 'locales'),
});
