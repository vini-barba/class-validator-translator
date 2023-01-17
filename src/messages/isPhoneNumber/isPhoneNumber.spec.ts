import { IsPhoneNumber, validateSync } from 'class-validator';
import isPhoneNumberMessage from './isPhoneNumber';

describe('isPhoneNumber', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'phone deve ser um número de telefone válido';
    const got = isPhoneNumberMessage({
      property: 'phone',
      constraints: [],
      value: '123',
      targetName: 'phone',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'tel deve ser um número de telefone válido';
    class User {
      @IsPhoneNumber('BR', { message: isPhoneNumberMessage })
      tel!: string;
    }

    const user = new User();
    user.tel = 'numero tel 123';

    const errors = validateSync(user);

    const got = errors[0].constraints?.isPhoneNumber;

    expect(got).toBe(want);
  });
});
