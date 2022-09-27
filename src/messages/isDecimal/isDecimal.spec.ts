import { IsDecimal, validateSync } from 'class-validator';
import isDecimalMessage from './isDecimal';

describe('IsDecimal', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'endereço não é um valor decimal válido';
    const got = isDecimalMessage({
      property: 'endereço',
      constraints: [],
      value: 'Avenida 2',
      targetName: '',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'firstname não é um valor decimal válido';
    class User {
      @IsDecimal({}, { message: isDecimalMessage })
      firstname!: string;
    }

    const user = new User();
    user.firstname = 'Michael Jackson';

    const errors = validateSync(user);

    const got = errors[0].constraints?.isDecimal;

    expect(got).toBe(want);
  });
});
