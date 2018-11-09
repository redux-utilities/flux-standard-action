import { FSAAuto, isFSA } from '../src';

describe('Usage of FSAAuto (automatically infer required properties', () => {
  it('must specify payload property even when using a union with undefined', () => {
    const fsa_with_payload = { type: 'TEST', payload: undefined };
    expectOptionalPayload(fsa_with_payload);

    const fsa_without_payload = { type: 'TEST' };
    // Not possible to cast!!!
    // expectOptionalPayload(fsa_without_payload);

    function expectOptionalPayload(fsa: FSAAuto<string | undefined>) {
      expect(fsa.payload).toBeUndefined();
    }
  });
});
