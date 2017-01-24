Flux Standard Action
====================

[![build status](https://img.shields.io/travis/acdlite/flux-standard-action/master.svg?style=flat-square)](https://travis-ci.org/acdlite/flux-standard-action)
[![npm version](https://img.shields.io/npm/v/flux-standard-action.svg?style=flat-square)](https://www.npmjs.com/package/flux-standard-action)

## Introduction

A human-friendly standard for Flux action objects. Feedback welcome.

### Motivation

It's much easier to work with Flux actions if we can make certain assumptions about their shape. For example, essentially all Flux actions have an identifier field, such as `type`, `actionType`, or `actionId`. Many Flux implementations also include a way for actions to indicate success or failure, especially as the result of a data-fetching operation. Defining a minimal, common standard for these patterns enables the creation of useful tools and abstractions.

### Errors as a first class concept

Flux actions can be thought of as an asynchronous sequence of values. It is important for asynchronous sequences to deal with errors. Currently, many Flux implementations don't do this, and instead define separate action types like `LOAD_SUCCESS` and `LOAD_FAILURE`. This is less than ideal, because it overloads two separate concerns: disambiguating actions of a certain type from the "global" action sequence, and indicating whether or not an action represents an error. FSA treats errors as a first class concept.

### Design goals

- **Human-friendly.** FSA actions should be easy to read and write by humans.
- **Useful**. FSA actions should enable the creation of useful tools and abstractions.
- **Simple.** FSA should be simple, straightforward, and flexible in its design.

### Example

A basic Flux Standard Action:

```js
{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'  
  }
}
```

An FSA that represents an error, analogous to a rejected Promise:

```js
{
  type: 'ADD_TODO',
  payload: new Error(),
  error: true
}
```

## Actions

An action MUST

- be a plain JavaScript object.
- have a `type` property.

An action MAY

- have an `error` property.
- have a `payload` property.
- have a `meta` property.

An action MUST NOT include properties other than `type`, `payload`, `error`, and `meta`.

### `type`

The `type` of an action identifies to the consumer the nature of the action that has occurred. By convention, `type` is usually a string constant or a Symbol. If two types are the same, they MUST be strictly equivalent (using `===`).

### `payload`

The optional `payload` property MAY be any type of value. It represents the payload of the action. Any information about the action that is not the `type` or status of the action should be part of the `payload` field.

By convention, if `error` is `true`, the `payload` SHOULD be an error object. This is akin to rejecting a promise with an error object.

### `error`

The optional `error` property MAY be set to `true` if the action represents an error.

An action whose `error` is true is analogous to a rejected Promise. By convention, the `payload` SHOULD be an error object.

If `error` has any other value besides `true`, including `undefined` and `null`, the action MUST NOT be interpreted as an error.

### `meta`

The optional `meta` property MAY be any type of value. It is intended for any extra information that is not part of the payload.

## Utility functions

The module `flux-standard-action` is available on npm. It exports a few utility functions.

```js
import { isFSA } from 'flux-standard-action';
```
### `isFSA(action)`

Returns true if `action` is FSA compliant.

## Libraries

- [redux-actions](https://github.com/acdlite/redux-actions) - a set of helpers for creating and handling FSA actions in Redux.
- [redux-promise](https://github.com/acdlite/redux-promise) - Redux promise middleware that supports FSA actions.
- [redux-rx](https://github.com/acdlite/redux-rx) - RxJS utilities for Redux, including a middleware that supports FSA actions.
