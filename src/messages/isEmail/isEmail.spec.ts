import { IsEmail, validateSync } from 'class-validator';
import isEmailMessage from './isEmail';

describe('Contains', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'email deve ser um email';
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
    const want = 'emailAddress deve ser um email';
    class User {
      @IsEmail({}, { message: isEmailMessage })
      emailAddress!: string;
    }

    const user = new User();
    user.emailAddress = 'user.com';

    const errors = validateSync(user);

    const got = errors[0].constraints?.isEmail;

    expect(got).toBe(want);
  });
});
