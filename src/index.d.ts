/**
 * A Flux Standard action with optional payload and metadata properties.
 */
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

/**
 * An extension of the Flux Standard action that represents an action containing an error as its payload.
 */
export interface ErrorFluxStandardAction<
  CustomError extends Error = Error,
  Meta = undefined,
  Type extends string = string
> extends FluxStandardAction<CustomError, Meta, Type> {
  /**
   * The required `error` property MUST be set to `true` if the action represents an error.
   */
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

/**
 * A Flux Standard action with a required payload property.
 */
export interface FluxStandardActionWithPayload<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> extends FluxStandardAction<Payload, Meta, Type> {
  /**
   * The required `payload` property MAY be any type of value.
   * It represents the payload of the action.
   * Any information about the action that is not the type or status of the action should be part of the `payload` field.
   * By convention, if `error` is `true`, the `payload` SHOULD be an error object.
   * This is akin to rejecting a promise with an error object.
   */
  payload: Payload;
}
/**
 * Alias for FSAWithPayload
 */
export type FSAWithPayload<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> = FluxStandardActionWithPayload<Payload, Meta, Type>;

/**
 * A Flux Standard action with a required metadata property.
 */
export interface FluxStandardActionWithMeta<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> extends FluxStandardAction<Payload, Meta, Type> {
  /**
   * The required `meta` property MAY be any type of value.
   * It is intended for any extra information that is not part of the payload.
   */
  meta: Meta;
}
/**
 * Alias for FluxStandardActionWithMeta
 */
export type FSAWithMeta<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> = FluxStandardActionWithMeta<Payload, Meta, Type>;

/**
 * A Flux Standard action with required payload and metadata properties.
 */
export type FluxStandardActionWithPayloadAndMeta<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> = FluxStandardActionWithPayload<Payload, Meta, Type> &
  FluxStandardActionWithMeta<Payload, Meta, Type>;
/**
 * Alias for FluxStandardActionWithPayloadAndMeta
 */
export type FSAWithPayloadAndMeta<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> = FluxStandardActionWithPayloadAndMeta<Payload, Meta, Type>;

/**
 * A Flux Standard action with inferred requirements for the payload and metadata properties.
 * The `payload` and `meta` properties will be required if the corresponding type argument
 * if not the `undefined` type.
 */
export type FluxStandardActionAuto<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> = Payload extends undefined
  ? (Meta extends undefined
      ? FluxStandardAction<Payload, Meta, Type>
      : FluxStandardActionWithMeta<Payload, Meta, Type>)
  : (Meta extends undefined
      ? FluxStandardActionWithPayload<Payload, Meta, Type>
      : FluxStandardActionWithPayloadAndMeta<Payload, Meta, Type>);
/**
 * Alias for FluxStandardActionAuto
 */
export type FSAAuto<
  Payload = undefined,
  Meta = undefined,
  Type extends string = string
> = FluxStandardActionAuto<Payload, Meta, Type>;

/**
 * A Flux Standard Error Action with a required payload property.
 */
export type ErrorFluxStandardActionWithPayload<
  CustomError extends Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardAction<CustomError, Meta, Type> &
  FluxStandardActionWithPayload<CustomError, Meta, Type>;
/**
 * Alias for ErrorFluxStandardActionWithPayload
 */
export type ErrorFSAWithPayload<
  CustomError extends Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardActionWithPayload<CustomError, Meta, Type>;

/**
 * A Flux Standard Error Action with a required metadata property.
 */
export type ErrorFluxStandardActionWithMeta<
  CustomError extends Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardAction<CustomError, Meta, Type> &
  FluxStandardActionWithMeta<CustomError, Meta, Type>;
/**
 * Alias for ErrorFluxStandardActionWithMeta
 */
export type ErrorFSAWithMeta<
  CustomError extends Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardActionWithMeta<CustomError, Meta, Type>;

/**
 * A Flux Standard Error Action with required payload and metadata properties.
 */
export type ErrorFluxStandardActionWithPayloadAndMeta<
  CustomError extends Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardActionWithPayload<CustomError, Meta, Type> &
  ErrorFluxStandardActionWithMeta<CustomError, Meta, Type>;
/**
 * Alias for ErrorFluxStandardActionWithPayloadAndMeta
 */
export type ErrorFSAWithPayloadAndMeta<
  CustomError extends Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardActionWithPayloadAndMeta<CustomError, Meta, Type>;

/**
 * A Flux Standard Error action with inferred requirements for the payload and metadata properties.
 * The `payload` and `meta` properties will be required if the corresponding type argument
 * if not the `undefined` type.
 *
 * Note: The `payload` property will always be required, since the `CustomError` type argument does
 * not allow for specification of the `undefined` type.
 */
export type ErrorFluxStandardActionAuto<
  CustomError extends Error,
  Meta = undefined,
  Type extends string = string
> = Meta extends undefined
  ? ErrorFluxStandardActionWithPayload<CustomError, Meta, Type>
  : ErrorFluxStandardActionWithPayloadAndMeta<CustomError, Meta, Type>;
/**
 * Alias for ErrorFluxStandardActionAuto
 */
export type ErrorFSAAuto<
  CustomError extends Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardActionAuto<CustomError, Meta, Type>;
