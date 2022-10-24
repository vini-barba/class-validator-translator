import { IsAlpha, validateSync } from 'class-validator';
import isAlphaMessage from './isAlpha';

describe('isAlpha', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'texto deve conter apenas letras (a-zA-Z)';
    const got = isAlphaMessage({
      property: 'texto',
      constraints: [],
      value: '123',
      targetName: 'texto',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'text deve conter apenas letras (a-zA-Z)';
    class User {
      @IsAlpha('pt-BR', { message: isAlphaMessage })
      text!: string;
    }

    const user = new User();
    user.text = '12345^';

    const errors = validateSync(user);

    const got = errors[0].constraints?.isAlpha;

    expect(got).toBe(want);
  });
});
