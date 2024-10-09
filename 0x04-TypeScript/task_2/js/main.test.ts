import { teachClass } from './main';

describe('teachClass', () => {
  it('should return "Teaching Math" when todayClass is "Math', () => {
    expect(teachClass('Math')).toBe('Teaching Math');
  });

  it('should return "Teaching History" when todayClass is "History"', () => {
    expect(teachClass('History')).toBe('Teaching History');
  });
})
