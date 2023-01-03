import { IsBoolean, validateSync } from 'class-validator';
import isBooleanMessage from './isBoolean';

describe('isBoolean', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'status deve ser um valor booleano';
    const got = isBooleanMessage({
      property: 'status',
      constraints: [],
      value: '123',
      targetName: 'status',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'active deve ser um valor booleano';
    class User {
      @IsBoolean({ message: isBooleanMessage })
      active!: string;
    }

    const user = new User();
    user.active = 'true';

    const errors = validateSync(user);

    const got = errors[0].constraints?.isBoolean;

    expect(got).toBe(want);
  });
});
