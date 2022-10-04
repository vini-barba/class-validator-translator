import { IsNotEmpty, validateSync } from 'class-validator';
import isNotEmptyMessage from './isNotEmpty';

describe('isMongoId', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'texto não deve ser vazio';
    const got = isNotEmptyMessage({
      property: 'texto',
      constraints: [],
      value: '123',
      targetName: 'texto',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'text não deve ser vazio';
    class Post {
      @IsNotEmpty({ message: isNotEmptyMessage })
      text!: string;
    }

    const post = new Post();
    post.text = '';

    const errors = validateSync(post);

    const got = errors[0].constraints?.isNotEmpty;

    expect(got).toBe(want);
  });
});
