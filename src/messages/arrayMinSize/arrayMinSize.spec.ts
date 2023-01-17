import { ArrayMinSize, validateSync } from 'class-validator';
import arrayMinSizeMessage from './arrayMinSize';

describe('arrayMinSize', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'phones deve conter pelo menos 1 elemento';
    const got = arrayMinSizeMessage({
      property: 'phones',
      constraints: [1],
      value: [],
      targetName: 'phones',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should return the message translated to portuguese', () => {
    const want = 'phones deve conter pelo menos 2 elementos';
    const got = arrayMinSizeMessage({
      property: 'phones',
      constraints: [2],
      value: ['91234-5678'],
      targetName: 'phones',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'sessions deve conter pelo menos 1 elemento';
    class User {
      @ArrayMinSize(1, { message: arrayMinSizeMessage })
      sessions!: string[];
    }

    const user = new User();
    user.sessions = [];

    const errors = validateSync(user);
    const got = errors[0].constraints?.arrayMinSize;

    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'sessions deve conter pelo menos 2 elementos';
    class User {
      @ArrayMinSize(2, { message: arrayMinSizeMessage })
      sessions!: string[];
    }

    const user = new User();
    user.sessions = ['linux'];

    const errors = validateSync(user);
    const got = errors[0].constraints?.arrayMinSize;

    expect(got).toBe(want);
  });
});
