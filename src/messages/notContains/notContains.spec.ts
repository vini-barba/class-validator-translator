import { NotContains, validateSync } from 'class-validator';
import NotContainsMessage from './notContains';

describe('NotContains', () => {
  it('should return the message translated to portuguese', () => {
    const want = "texto não deve conter a string 'video'";
    const got = NotContainsMessage({
      property: 'texto',
      constraints: ['video'],
      value: 'casimiro reage a video ...',
      targetName: 'Teste',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = "text não deve conter a string 'passwords'";
    class Post {
      @NotContains('passwords', { message: NotContainsMessage })
      text!: string;
    }

    const post = new Post();
    post.text = 'dont share your passwords online';

    const errors = validateSync(post);

    const got = errors[0].constraints?.notContains;

    expect(got).toBe(want);
  });
});
