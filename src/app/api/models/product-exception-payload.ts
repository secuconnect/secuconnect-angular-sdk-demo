// noinspection JSUnusedGlobalSymbols


/**
 * Payload of exceptions returned by the API
 */
export class ProductExceptionPayload {
  /**
   * Request status (always 'error')
   */
  status?: string;
  /**
   * Error type identifier
   */
  error?: string;
  /**
   * Error details
   */
  errorDetails?: string;
  /**
   * Error details in German
   */
  errorUser?: string;
  /**
   * HTTP code corresponding to error
   */
  code?: string;
  /**
   * ID by which support team can relate error with action(s) that caused it
   */
  supportId?: string;
}
