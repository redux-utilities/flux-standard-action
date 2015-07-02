import { isError } from '../';

const type = 'ACTION_TYPE';

describe('isError', () => {
  it('returns false if action is not an FSA', () => {
    expect(isError(null)).to.be.false;
    expect(isError({ foo: 'bar' })).to.be.false;
  });

  it('returns true if status is "error"', () => {
    expect(isError({ type, status: 'error' })).to.be.true;
    expect(isError({ type, status: 'success' })).to.be.false;
  });

  it('returns false if status is not "error"', () => {
    expect(isError({ type })).to.be.false;
    expect(isError({ type, status: 'pending' })).to.be.false;
  });
});
