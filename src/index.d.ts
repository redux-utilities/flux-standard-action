export interface FluxStandardAction<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> {
  /**
   * The `type` of an action identifies to the consumer the nature of the action that has occurred.
   * Two actions with the same `type` MUST be strictly equivalent (using `===`)
   */
  type: Type;
  /**
   * The optional `payload` property MAY be any type of value.
   * It represents the payload of the action.
   * Any information about the action that is not the type or status of the action should be part of the `payload` field.
   * By convention, if `error` is `true`, the `payload` SHOULD be an error object.
   * This is akin to rejecting a promise with an error object.
   */
  payload?: Payload;
  /**
   * The optional `error` property MAY be set to true if the action represents an error.
   * An action whose `error` is true is analogous to a rejected Promise.
   * By convention, the `payload` SHOULD be an error object.
   * If `error` has any other value besides `true`, including `undefined`, the action MUST NOT be interpreted as an error.
   */
  error?: boolean;
  /**
   * The optional `meta` property MAY be any type of value.
   * It is intended for any extra information that is not part of the payload.
   */
  meta?: Meta;
}

export interface ErrorFluxStandardAction<
  CustomError extends Error = Error,
  Meta = undefined,
  Type extends string = string
> extends FluxStandardAction<CustomError, Meta, Type> {
  error: true;
}

/**
 * Alias for FluxStandardAction.
 */
export type FSA<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> = FluxStandardAction<Payload, Meta, Type>;

/**
 * Alias for ErrorFluxStandardAction.
 */
export type ErrorFSA<
  CustomError extends Error = Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardAction<CustomError, Meta, Type>;

/**
 * Returns `true` if `action` is FSA compliant.
 */
export function isFSA<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
>(action: any): action is FluxStandardAction<Payload, Meta, Type>;

/**
 * Returns `true` if `action` is FSA compliant error.
 */
export function isError<
  CustomError extends Error = Error,
  Meta = undefined,
  Type extends string = string
>(action: any): action is ErrorFluxStandardAction<CustomError, Meta, Type>;
