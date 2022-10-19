import { Length, validateSync } from 'class-validator';
import lengthMessage from './length';

describe('Length', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'dia deve ser menor ou igual a 2 caracteres';
    const got = lengthMessage({
      property: 'dia',
      constraints: [1, 2],
      value: '331',
      targetName: 'dia',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator with a min message', () => {
    const want = 'name deve ser maior ou igual a 1 caracteres';
    class User {
      @Length(1, 100, { message: lengthMessage })
      name!: string;
    }

    const user = new User();
    user.name = '';

    const errors = validateSync(user);
    const got = errors[0].constraints?.isLength;

    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator with a max message', () => {
    const want = 'name deve ser menor ou igual a 7 caracteres';
    class User {
      @Length(1, 7, { message: lengthMessage })
      name!: string;
    }

    const user = new User();
    user.name = 'Arnold Schwarzenegger';

    const errors = validateSync(user);
    const got = errors[0].constraints?.isLength;

    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator with a type wrongly', () => {
    const want =
      'age deve ser maior ou igual a 1 e menor ou igual a 100 caracteres';
    class User {
      @Length(1, 100, { message: lengthMessage })
      age!: number;
    }

    const user = new User();
    user.age = 12;

    const errors = validateSync(user);
    const got = errors[0].constraints?.isLength;

    expect(got).toBe(want);
  });
});
