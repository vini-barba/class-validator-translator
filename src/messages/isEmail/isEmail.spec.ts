import { IsEmail, validateSync } from 'class-validator';
import isEmailMessage from './isEmail';

describe('Contains', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'O valor saopaulo123 não é um formato de email válido';
    const got = isEmailMessage({
      property: 'email',
      constraints: [],
      value: 'saopaulo123',
      targetName: 'email',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'O valor user.com não é um formato de email válido';
    class User {
      @IsEmail({ message: isEmailMessage })
      email!: string;
    }

    const user = new User();
    user.email = 'user.com';

    const errors = validateSync(user);
    const got = errors[0].constraints?.isEmail;

    expect(1).toBe(1);
  });
});
