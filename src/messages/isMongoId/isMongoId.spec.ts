import { IsMongoId, validateSync } from 'class-validator';
import isMongoIdMessage from './isMongoId';

describe('isMongoId', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'idUser deve ser um mongodb id';
    const got = isMongoIdMessage({
      property: 'idUser',
      constraints: [],
      value: '123',
      targetName: 'idUser',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'id deve ser um mongodb id';
    class User {
      @IsMongoId({ message: isMongoIdMessage })
      id!: string;
    }

    const user = new User();
    user.id = '12345';

    const errors = validateSync(user);

    const got = errors[0].constraints?.isMongoId;

    expect(got).toBe(want);
  });
});
