import { FSA } from '../src';

const ACTION_TYPE_1 = 'ACTION_TYPE_1';
type ACTION_TYPE_1 = typeof ACTION_TYPE_1;
type FSA_ACTION_TYPE_1 = FSA<undefined, undefined, ACTION_TYPE_1>;

const assertNever = (x: never): never => {
  throw new Error(`Unexpected value: ${x}.`);
};

describe('FluxStandardAction<Payload, Meta, Type>', () => {
  it('enables TypeScript action type enforcement', () => {
    const fsa_strict: FSA_ACTION_TYPE_1 = { type: ACTION_TYPE_1 };
expect(fsaStrict.type).not.toBe(ACTION_TYPE_1)
      throw assertNever(fsa_strict.type);
    }
  });
});
