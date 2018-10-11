interface FluxStandardActionRequiredKeys {
  /**
   * The `type` of an action identifies to the consumer the nature of the action that has occurred.
   * Two actions with the same `type` MUST be strictly equivalent (using `===`)
   */
  type: string;
}

interface FluxStandardActionOptionalKeys<Payload, Meta> {
  /**
   * The optional `payload` property MAY be any type of value.
   * It represents the payload of the action.
   * Any information about the action that is not the type or status of the action should be part of the `payload` field.
   * By convention, if `error` is `true`, the `payload` SHOULD be an error object.
   * This is akin to rejecting a promise with an error object.
   */
  payload: Payload;
  /**
   * The optional `error` property MAY be set to true if the action represents an error.
   * An action whose `error` is true is analogous to a rejected Promise.
   * By convention, the `payload` SHOULD be an error object.
   * If `error` has any other value besides `true`, including `undefined`, the action MUST NOT be interpreted as an error.
   */
  error: boolean;
  /**
   * The optional `meta` property MAY be any type of value.
   * It is intended for any extra information that is not part of the payload.
   */
  meta: Meta;
}

/**
 * Flux standard action. All properties except `type` are optional.
 */
export type FluxStandardAction<
  Payload,
  Meta = undefined
> = FluxStandardActionRequiredKeys &
  Partial<FluxStandardActionOptionalKeys<Payload, Meta>>;

/**
 * Enforces the `payload` property on an FSA cannot be optional.
 */
export type FluxStandardActionWithPayload<
  Payload
> = FluxStandardActionRequiredKeys &
  Pick<FluxStandardActionOptionalKeys<Payload, undefined>, 'payload'>;

/**
 * Enforces the `meta` property on an FSA cannot be optional.
 */
export type FluxStandardActionWithMeta<Meta> = FluxStandardActionRequiredKeys &
  Pick<FluxStandardActionOptionalKeys<undefined, Meta>, 'meta'>;

/**
 * Enforces the `payload` and `meta` properties on an FSA cannot be optional.
 */
export type FluxStandardActionWithPayloadAndMeta<
  Payload,
  Meta
> = FluxStandardActionRequiredKeys &
  Pick<FluxStandardActionOptionalKeys<Payload, Meta>, 'payload' | 'meta'>;

/**
 * A FluxStandardAction where the optional `payload` is enforced to inherit from Error.
 * The `error` property must be true.
 */
export interface ErrorFluxStandardAction<
  CustomError extends Error,
  Meta = undefined
> extends FluxStandardAction<CustomError, Meta> {
  error: true;
}

/**
 * Enforces the `payload` property on an error FSA cannot be null.
 */
export interface ErrorFluxStandardActionWithPayload<Payload extends Error>
  extends FluxStandardActionWithPayload<Payload> {
  error: true;
}

/**
 * Enforces the `meta` property on an error FSA cannot be null.
 */
export interface ErrorFluxStandardActionWithMeta<Meta>
  extends FluxStandardActionWithMeta<Meta> {
  error: true;
}

/**
 * Enforces the `payload` and `meta` properties on an error FSA cannot be null.
 */
export interface ErrorFluxStandardActionWithPayloadAndMeta<Payload, Meta>
  extends FluxStandardActionWithPayloadAndMeta<Payload, Meta> {
  error: true;
}

/**
 * Alias for FluxStandardAction.
 */
export type FSA<Payload, Meta = undefined> = FluxStandardAction<Payload, Meta>;

/**
 * Alias for FluxStandardActionWithPayload.
 */
export type FSAWithPayload<Payload> = FluxStandardActionWithPayload<Payload>;

/**
 * Alias for FluxStandardActionWithMeta.
 */
export type FSAWithMeta<Meta> = FluxStandardActionWithMeta<Meta>;

/**
 * Alias for FluxStandardActionWithPayloadAndMeta.
 */
export type FSAWithPayloadAndMeta<
  Payload,
  Meta
> = FluxStandardActionWithPayloadAndMeta<Payload, Meta>;

/**
 * Alias for ErrorFluxStandardAction.
 */
export type ErrorFSA<
  CustomError extends Error,
  Meta = undefined
> = ErrorFluxStandardAction<CustomError, Meta>;

/**
 * Alias for ErrorFluxStandardActionWithPayload.
 */
export type ErrorFSAWithPayload<
  Payload extends Error
> = ErrorFluxStandardActionWithPayload<Payload>;

/**
 * Alias for ErrorFluxStandardActionWithMeta.
 */
export type ErrorFSAWithMeta<Meta> = ErrorFluxStandardActionWithMeta<Meta>;

/**
 * Alias for ErrorFluxStandardActionWithPayloadAndMeta.
 */
export type ErrorFSAWithPayloadAndMeta<
  Payload extends Error,
  Meta
> = ErrorFluxStandardActionWithPayloadAndMeta<Payload, Meta>;

/**
 * Returns `true` if `action` is FSA compliant.
 */
export function isFSA<Payload, Meta = undefined>(
  action: any
): action is FluxStandardAction<Payload, Meta>;

/**
 * Returns `true` if `action` is FSA compliant error.
 */
export function isError<CustomError extends Error, Meta = undefined>(
  action: any
): action is ErrorFluxStandardAction<CustomError, Meta>;
