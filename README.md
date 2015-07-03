Flux Standard Action
====================

[![build status](https://img.shields.io/travis/acdlite/flux-standard-action/master.svg?style=flat-square)](https://travis-ci.org/acdlite/flux-standard-action)
[![npm version](https://img.shields.io/npm/v/flux-standard-action.svg?style=flat-square)](https://www.npmjs.com/package/flux-standard-action)

## Introduction

A human-friendly standard for Flux action objects. Feedback welcome.

### Motivation

It's much easier to work with Flux actions if we can make certain assumptions about their shape. For example, essentially all Flux actions have an identifier field, such as `type`, `actionType`, or `actionId`. Many Flux implementations also include a way for actions to indicate success or failure, especially as the result of a data-fetching operation. Defining a minimal, common standard for these patterns enables the creation of useful tools and abstractions.

### Errors as a first class concept

Flux actions can be thought of as an asychronous sequence of values. It is important for asynchronous sequences to deal with errors. Currently, many Flux implementations don't do this, and instead define separate action types like `LOAD_SUCCESS` and `LOAD_FAILURE`. This is less than ideal, because it overloads two separate concerns: disambiguating actions of a certain type from the "global" action sequence, and indicating whether or not an action represents an error. FSA treats errors as a first class concept.

### Design goals

- **Human-friendly.** FSA actions should be easy to read and write by humans.
- **Useful**. FSA actions should enable the creation of useful tools and abstractions.
- **Simple.** FSA should be simple, straightforward, and flexible in its design.

### Example

A basic Flux standard action:

```js
{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'  
  }
}
```

## Actions

An action MUST

- be a plain JavaScript object.
- have a `type` property.

An action MAY

- have a `status` property.
- have a `payload` property.

Properties other than for `type`, `payload`, and `status` are also permitted, but they SHOULD only contain meta information about the action itself.

### `type`

The `type` of an action identifies to the consumer the nature of the action that has occurred. Two actions with the same `type` MUST be strictly equivalent (using `===`). By convention, `type` is usually string constant or a Symbol.

### `status`

The optional `status` property MAY be one of

- `success` - indicates that action represents a successful operation
- `error` - indicates that the action represents a failed operation

Other values of `status` are valid, but only `success` and `error` are treated with any special meaning.

`status` MAY be undefined, in which case the consumer MUST treat the action as if its status were `success`.

If `status` is defined but not one of `success` or `error`, the consumer MUST NOT respond to the action.

An example of using a `status` other than `success` or `error` is if the action will be transformed before being sent to the consumer, at which point `status` can be updated.

### `payload`

The optional `payload` property can be any type of value. It represents the payload of the action. Any information about the action that is not the `type` or `status` should be part of the `payload` field.

By convention, if the `status` is `error`, the `payload` SHOULD be an error object. This is akin to rejecting a promise with an error object.

## Utility functions

The module `flux-standard-action` is available on npm. It exports a few utlity functions.

```js
import { isFSA, isSuccess, isError } from 'flux-standard-action';
```
### `isFSA(action)`

Returns true if `action` is FSA compliant.

### `isSuccess(action)`

Returns true if `action` should be interpreted by consumer as successful.

### `isError(action)`

Returns true if `action` should be interpreted by consumer as unsuccessful. Note that this is not a perfect inverse of `isSuccess`. For example, if the status of `action` is `'pending'`, the action should be interpreted as neither successful nor unsuccessful — it should be ignored.

**NOTE**: `isSuccess()` and `isError()` assume that the passed action is an FSA action, in order to avoid redundant type checks. Make sure you check `isFSA()` first.

## Libraries

- [redux-actions](https://github.com/acdlite/redux-actions) - a set of helpers for creating and handling FSA actions in Redux.
- [redux-promise](https://github.com/acdlite/redux-promise) - Redux promise middleware that supports FSA actions.
- [redux-rx](https://github.com/acdlite/redux-rx) - RxJS utilities for Redux, including a middleware that supports FSA actions.
