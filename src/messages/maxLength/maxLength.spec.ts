import { MaxLength, validateSync } from 'class-validator';
import MaxLengthMessage from './maxLength';

describe('MaxLength', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'endereço deve ser menor ou igual a 5 caracteres';
    const got = MaxLengthMessage({
      property: 'endereço',
      constraints: [5],
      value: 'Avenida 2',
      targetName: '',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'firstname deve ser menor ou igual a 7 caracteres';
    class User {
      @MaxLength(7, { message: MaxLengthMessage })
      firstname!: string;
    }

    const user = new User();
    user.firstname = 'Michael Jackson';

    const errors = validateSync(user);

    const got = errors[0].constraints?.maxLength;

    expect(got).toBe(want);
  });
});
