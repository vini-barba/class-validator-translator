import { Contains, validateSync } from 'class-validator';
import ContainsMessage from './contains';

describe('Contains', () => {
  it('should return the message translated to portuguese', () => {
    const want = "texto deve conter a string 'teste'";
    const got = ContainsMessage({
      property: 'texto',
      constraints: ['teste'],
      value: 'casimiro reage a...',
      targetName: 'Teste',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = "text deve conter a string 'hello'";
    class Post {
      @Contains('hello', { message: ContainsMessage })
      text!: string;
    }

    const post = new Post();
    post.text = 'this is a great post about hell world';

    const errors = validateSync(post);

    const got = errors[0].constraints?.contains;

    expect(got).toBe(want);
  });
});
