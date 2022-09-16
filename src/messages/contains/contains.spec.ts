import { langs } from '../../config/langs';
import { Contains } from './contains';

describe('Contains', () => {
  it('should return the message translated to portuguese', () => {
    const want = "texto deve conter a string 'teste'";
    const got = Contains(langs.pt, {
      property: 'texto',
      constraints: ['teste'],
      value: 'casimiro reage a...',
      targetName: 'Teste',
      object: {},
    });
    expect(got).toBe(want);
  });
});
