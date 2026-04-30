/**
 * Error payload emitted on the `error` socket event for any long-running
 * realtime flow (role import/create-from-template, content generation,
 * lab session launch, etc.). Mirrors the shape produced by the backend's
 * `errorHandling.processForSocket` helper.
 *
 * `details` is populated for express-validator field errors (i.e. malformed
 * input rejected by the socket validation chain) and for any other error
 * created via `errorHandler.create(code, message, details)`.
 */
export interface SocketError {
  code: number;
  message: string;
  details?: unknown;
}

/**
 * Type guard to narrow an unknown rejection value to a `SocketError`.
 * Useful in consumer `.catch` blocks where the rejection arrives as
 * `unknown`/`any`.
 */
export const isSocketError = (value: unknown): value is SocketError => {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as { code?: unknown }).code === "number" &&
    typeof (value as { message?: unknown }).message === "string"
  );
};
