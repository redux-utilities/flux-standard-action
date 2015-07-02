Flux Standard Action
====================

[![build status](https://img.shields.io/travis/acdlite/flux-action-standard/master.svg?style=flat-square)](https://travis-ci.org/acdlite/flux-action-standard)
[![npm version](https://img.shields.io/npm/v/flux-action-standard.svg?style=flat-square)](https://www.npmjs.com/package/flux-action-standard)

## Introduction

A human-friendly standard for Flux action objects. Feedback welcome.

### Motivation

It's much easier to work with Flux actions if we can make certain assumptions about their shape. For example, essentially all Flux actions have an identifier field, such as `type`, `actionType`, or `actionId`. Many Flux implementations also include a way for actions to indicate success or failure, especially as the result of a data-fetching operation. Defining a minimal, common standard for these patterns enables the creation of useful tools and abstractions.

### Design goals

- **Human-friendly.** FSA actions should be easy to read and write by humans.
- **Useful**. FSA actions should enable the creation of useful tools and abstractions.
- **Simple.** FSA should be simple, straightforward, and flexible in its design.

### Example

A basic Flux standard action:

```js
{
  type: 'ADD_TODO',
  body: {
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
- have a `body` property.

All properties other than for `type`, `body`, and `status` are technically permitted, but they should not be used by the consumer. To compare the equality of two FSA actions, it is sufficient to compare only those three properties.

### `type`

The `type` of an action identifies to the consumer the nature of the action that has occurred. By convention, this is usually a string constant. FSA does not enforce this requirement, only that it MUST be defined.

### `status`

The optional `status` property MAY be one of

- `success` - indicates that action represents a successful operation
- `error` - indicates that the action represents a failed operation

Other values of `status` are valid, but only `success` and `error` are treated with any special meaning.

`status` MAY be undefined, in which case the consumer MUST treat the action as if its status were `success`.

If `status` is defined but not one of `success` or `error`, the consumer MUST NOT respond to the action.

An example of using a `status` other than `success` or `error` is if the action will be transformed before being sent to the consumer, at which point `status` can be updated.

### `body`

The optional `body` property can be any type of value. It represents the payload of the action. Any information about the action that is not the `type` or `status` should be part of the `body` field.

By convention, if the `status` is `error`, the `body` SHOULD be an error object. This is akin to rejecting a promise with an error object.

## Utility functions

The module `flux-standard-action` is available on npm. It exports a helper method `isFSA()`, which returns true if an action is a Flux Standard Action.

```js
import { isFSA } from 'flux-standard-action';

expect(isFSA({ type: 'ACTION_TYPE' })).to.be.true;
```

Additional utilities yet to be implemented:

 - `isSuccess()` - returns true if consumer should treat action as successful
 - `isError()` - returns true if consumer should treat action as a failure
 - `stripExtraneous()` - returns new action with extraneous properties removed

## Libraries

- [redux-fsa](https://github.com/acdlite/redux-fsa) - a set of helpers for creating and handling FSA actions in Redux.
- [redux-promise](https://github.com/acdlite/redux-promise) - Redux promise middleware that supports FSA actions.
