import {isPlainObject} from '../';

describe('isPlainObject()', () => {

  function Foo(a) {
    a; // For eslint
    this.a = 1;
  }

  it('detects a plain empty object', () => {
    const result = isPlainObject({});
    expect(result).to.be.true;
  });

  it('detects a plain object with keys', () => {
    const result = isPlainObject({'a': 1});
    expect(result).to.be.true;
  });

  it('detects a plain object with a property of "constructor"', () => {
    const result = isPlainObject({constructor: Foo});
    expect(result).to.be.true;
  });

  it('detects an array', () => {
    const result = isPlainObject([1, 2, 3]);
    expect(result).to.be.false;
  });

  it('detects a "subclass"', () => {
    const result = isPlainObject(new Foo(1));
    expect(result).to.be.false;
  });

  it('should return `true` for objects with a `[[Prototype]]` of `null`', () => {
    const object = Object.create(null);
    let result = isPlainObject(object);
    expect(result).to.be.true;

    object.constructor = Object.prototype.constructor;
    result = isPlainObject(object);
    expect(result).to.be.true;
  });

  it('should return `true` for plain objects with a custom `valueOf` property', () => {
    const result = isPlainObject({valueOf: 0});
    expect(result).to.be.true;
  });

  it('should return `false` for Object objects without a `toStringTag` of "Object"', () => {
    let result = isPlainObject(arguments);
    expect(result).to.be.false;

    result = isPlainObject(Error);
    expect(result).to.be.false;

    result = isPlainObject(Math);
    expect(result).to.be.false;
  });

  it('should return `false` for non-objects', () => {
    let result = isPlainObject(true);
    expect(result).to.be.false;

    result = isPlainObject('a');
    expect(result).to.be.false;
  });

});
