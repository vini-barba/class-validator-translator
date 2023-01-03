import { IsEnum, validateSync } from 'class-validator';
import isEnumMessage from './isEnum';

describe('isEnum', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'tipo deve ser um valor válido do enum';
    const got = isEnumMessage({
      property: 'tipo',
      constraints: ['C', 'R'],
      value: 'A',
      targetName: 'tipo',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'status deve ser um valor válido do enum';
    class User {
      @IsEnum(['A', 'I'], { message: isEnumMessage })
      status!: string;
    }

    const user = new User();
    user.status = 'D';

    const errors = validateSync(user);

    const got = errors[0].constraints?.isEnum;

    expect(got).toBe(want);
  });
});
