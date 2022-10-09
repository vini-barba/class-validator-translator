import { IsAlphanumeric, validateSync } from 'class-validator';
import isAlphanumericMessage from './isAlphanumeric';

describe('isAlphanumeric', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'texto deve conter apenas letras e números';
    const got = isAlphanumericMessage({
      property: 'texto',
      constraints: [],
      value: '12ç",.3',
      targetName: 'texto',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'text deve conter apenas letras e números';
    class User {
      @IsAlphanumeric('pt-BR', { message: isAlphanumericMessage })
      text!: string;
    }

    const user = new User();
    user.text = '12ç",.3';

    const errors = validateSync(user);

    const got = errors[0].constraints?.isAlphanumeric;

    expect(got).toBe(want);
  });
});
