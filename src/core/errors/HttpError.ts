/**
 * Custom HTTP error with status code.
 */
export class HttpError extends Error {
  status: number;

  /**
   * Creates a new HttpError instance.
   * @param {number} status HTTP status code
   * @param {string} message Error message
   */
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
