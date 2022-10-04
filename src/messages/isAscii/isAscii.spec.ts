import { IsAscii, validateSync } from 'class-validator';
import isAsciiMessage from './isAscii';

describe('isAscii', () => {
  it('should return the message translated to portuguese', () => {
    const want = 'symbol deve conter apenas caracteres ASCII';
    const got = isAsciiMessage({
      property: 'symbol',
      constraints: [],
      value: '¿',
      targetName: 'symbol',
      object: {},
    });
    expect(got).toBe(want);
  });

  it('should translate the message when used with the decorator', () => {
    const want = 'first deve conter apenas caracteres ASCII';
    class Questions {
      @IsAscii({ message: isAsciiMessage })
      first!: string;
    }

    const questions = new Questions();
    questions.first = '¿Tienes hambre?';

    const errors = validateSync(questions);

    const got = errors[0].constraints?.isAscii;

    expect(got).toBe(want);
  });
});
