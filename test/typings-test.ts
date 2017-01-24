import { FluxStandardAction, isError, isFSA } from '../src';

interface CustomPayload {
  a: number;
}

interface CustomMetadata {
  b: string;
}

interface MyError extends Error {
  someField: string;
}

function createCustomAction(payload: CustomPayload) {
  return {
    type: 'custom',
    payload
  };
}

function isCustomAction(action: FluxStandardAction<any, any>): action is FluxStandardAction<CustomPayload, any> {
  return isFSA(action) && action.type === 'custom';
}

function isCustomAction2(action: FluxStandardAction<any, any>): action is FluxStandardAction<CustomPayload, CustomMetadata> {
  return isFSA(action) && action.type === 'custom2';
}

function isCustomAction3(action: any): action is FluxStandardAction<void, string> {
  return isFSA(action) && action.type === 'custom3';
}

function isCustomAction4(action: any): action is FluxStandardAction<{ message: string }, void> {
  return true;
}

let action2 = {};
if (isCustomAction4(action2)) {
  // type guard infers payload will not be undefined
  console.log(action2.payload.message);
}

function reducer(state, action) {
  if (isFSA<CustomPayload, void>(action)) {
    let a: number = action.payload.a;
  }
  else if (isFSA<CustomPayload, CustomMetadata>(action)) {
    let a: number = action.payload.a;
    let b: string = action.meta.b;
  }
  else if (isFSA<void, string>(action)) {
    let meta: string = action.meta;
  }
  else if (isError(action)) {
    let iserr: true = action.error; // iserr === true
    let err: Error = action.payload;
  }
  else if (isError<MyError, void>(action)) {
    let err: MyError = action.payload;
    let someFieldValue: string = err.someField;
  }
}

function reducer2(state, action) {
  if (isCustomAction(action)) {
    let a: number = action.payload.a;
  }
  else if (isCustomAction2(action)) {
    let a: number = action.payload.a;
    let b: string = action.meta.b;
  }
  else if (isCustomAction3(action)) {
    let meta: string = action.meta;
  }
}

let action = createCustomAction({ a: 123 });
