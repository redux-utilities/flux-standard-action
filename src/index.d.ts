/**
 * A Flux Standard action with optional payload and metadata properties.
 */
export interface FluxStandardAction<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
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
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> extends FluxStandardAction<Type, CustomError, Meta> {
  /**
   * The required `error` property MUST be set to `true` if the action represents an error.
   */
  error: true;
}

/**
 * Alias for FluxStandardAction.
 */
export type FSA<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> = FluxStandardAction<Type, Payload, Meta>;

/**
 * Alias for ErrorFluxStandardAction.
 */
export type ErrorFSA<
  CustomError extends Error = Error,
  Meta = undefined,
  Type extends string = string
> = ErrorFluxStandardAction<Type, CustomError, Meta>;

/**
 * Returns `true` if `action` is FSA compliant.
 */
export function isFSA<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
>(action: any): action is FluxStandardAction<Type, Payload, Meta>;

/**
 * Returns `true` if `action` is FSA compliant error.
 */
export function isError<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
>(action: any): action is ErrorFluxStandardAction<Type, CustomError, Meta>;

/**
 * A Flux Standard action with a required payload property.
 */
export interface FluxStandardActionWithPayload<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> extends FluxStandardAction<Type, Payload, Meta> {
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
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> = FluxStandardActionWithPayload<Type, Payload, Meta>;

/**
 * A Flux Standard action with a required metadata property.
 */
export interface FluxStandardActionWithMeta<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> extends FluxStandardAction<Type, Payload, Meta> {
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
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> = FluxStandardActionWithMeta<Type, Payload, Meta>;

/**
 * A Flux Standard action with required payload and metadata properties.
 */
export type FluxStandardActionWithPayloadAndMeta<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> = FluxStandardActionWithPayload<Type, Payload, Meta> &
  FluxStandardActionWithMeta<Type, Payload, Meta>;
/**
 * Alias for FluxStandardActionWithPayloadAndMeta
 */
export type FSAWithPayloadAndMeta<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> = FluxStandardActionWithPayloadAndMeta<Type, Payload, Meta>;

/**
 * A Flux Standard action with inferred requirements for the payload and metadata properties.
 * The `payload` and `meta` properties will be required if the corresponding type argument
 * if not the `undefined` type.
 */
export type FluxStandardActionAuto<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> = Payload extends undefined
  ? (Meta extends undefined
      ? FluxStandardAction<Type, Payload, Meta>
      : FluxStandardActionWithMeta<Type, Payload, Meta>)
  : (Meta extends undefined
      ? FluxStandardActionWithPayload<Type, Payload, Meta>
      : FluxStandardActionWithPayloadAndMeta<Type, Payload, Meta>);
/**
 * Alias for FluxStandardActionAuto
 */
export type FSAAuto<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> = FluxStandardActionAuto<Type, Payload, Meta>;

/**
 * A Flux Standard Error Action with a required payload property.
 */
export type ErrorFluxStandardActionWithPayload<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> = ErrorFluxStandardAction<Type, CustomError, Meta> &
  FluxStandardActionWithPayload<Type, CustomError, Meta>;
/**
 * Alias for ErrorFluxStandardActionWithPayload
 */
export type ErrorFSAWithPayload<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> = ErrorFluxStandardActionWithPayload<Type, CustomError, Meta>;

/**
 * A Flux Standard Error Action with a required metadata property.
 */
export type ErrorFluxStandardActionWithMeta<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> = ErrorFluxStandardAction<Type, CustomError, Meta> &
  FluxStandardActionWithMeta<Type, CustomError, Meta>;
/**
 * Alias for ErrorFluxStandardActionWithMeta
 */
export type ErrorFSAWithMeta<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> = ErrorFluxStandardActionWithMeta<Type, CustomError, Meta>;

/**
 * A Flux Standard Error Action with required payload and metadata properties.
 */
export type ErrorFluxStandardActionWithPayloadAndMeta<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> = ErrorFluxStandardActionWithPayload<Type, CustomError, Meta> &
  ErrorFluxStandardActionWithMeta<Type, CustomError, Meta>;
/**
 * Alias for ErrorFluxStandardActionWithPayloadAndMeta
 */
export type ErrorFSAWithPayloadAndMeta<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> = ErrorFluxStandardActionWithPayloadAndMeta<Type, CustomError, Meta>;

/**
 * A Flux Standard Error action with inferred requirements for the payload and metadata properties.
 * The `payload` and `meta` properties will be required if the corresponding type argument
 * if not the `undefined` type.
 *
 * Note: The `payload` property will always be required, since the `CustomError` type argument does
 * not allow for specification of the `undefined` type.
 */
export type ErrorFluxStandardActionAuto<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> = Meta extends undefined
  ? ErrorFluxStandardActionWithPayload<Type, CustomError, Meta>
  : ErrorFluxStandardActionWithPayloadAndMeta<Type, CustomError, Meta>;
/**
 * Alias for ErrorFluxStandardActionAuto
 */
export type ErrorFSAAuto<
  Type extends string = string,
  CustomError extends Error = Error,
  Meta = undefined
> = ErrorFluxStandardActionAuto<Type, CustomError, Meta>;
