import { ArrayMaxSize, validateSync } from 'class-validator';
import arrayMaxSizeMessage from './arrayMaxSize';

describe('ArrayMaxSize', () => {
  it('should return the message translated to portuguese, singular', () => {
    const want = 'tags não deve conter mais de 1 item';
    const got = arrayMaxSizeMessage({
      property: 'tags',
      constraints: [1],
      value: ['user', 'admin'],
      targetName: '',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should return the message translated to portuguese, plural', () => {
    const want = 'tags não deve conter mais de 2 itens';
    const got = arrayMaxSizeMessage({
      property: 'tags',
      constraints: [2],
      value: ['user', 'admin', 'developer'],
      targetName: '',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should return the message translated to portuguese, zero', () => {
    const want = 'tags não deve conter mais de 0 itens';
    const got = arrayMaxSizeMessage({
      property: 'tags',
      constraints: [0],
      value: ['user', 'admin', 'developer'],
      targetName: '',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator, singular', () => {
    const want = 'tags não deve conter mais de 1 item';
    class User {
      @ArrayMaxSize(1, { message: arrayMaxSizeMessage })
      tags!: string[];
    }

    const user = new User();
    user.tags = ['user', 'developer'];

    const errors = validateSync(user);

    const got = errors[0].constraints?.arrayMaxSize;

    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator, plural', () => {
    const want = 'tags não deve conter mais de 2 itens';
    class User {
      @ArrayMaxSize(2, { message: arrayMaxSizeMessage })
      tags!: string[];
    }

    const user = new User();
    user.tags = ['user', 'developer', 'admin'];

    const errors = validateSync(user);

    const got = errors[0].constraints?.arrayMaxSize;

    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator, zero', () => {
    const want = 'tags não deve conter mais de 0 itens';
    class User {
      @ArrayMaxSize(0, { message: arrayMaxSizeMessage })
      tags!: string[];
    }

    const user = new User();
    user.tags = ['user', 'developer', 'admin'];

    const errors = validateSync(user);

    const got = errors[0].constraints?.arrayMaxSize;

    expect(got).toBe(want);
  });
});
