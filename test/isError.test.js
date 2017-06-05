import { isError } from '../src/';

const type = 'ACTION_TYPE';

describe('isError()', () => {
  it('returns true if action.error is strictly true', () => {
    expect(isError({ type, error: true })).toBe(true);
    expect(isError({ type, error: 'true' })).toBe(false);
    expect(isError({ type })).toBe(false);
  });
});
