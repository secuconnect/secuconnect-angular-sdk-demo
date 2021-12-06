// noinspection JSUnusedGlobalSymbols


export class PaymentContext {
  /**
   * auto capture the smart transaction
   */
  autoCapture?: boolean;
  /**
   * PaymentContext
   */
  paymentMethods?: Array<string>;
  /**
   * is this smart transaction created automatically by the merchant (process without customer interaction)
   */
  merchantInitiated?: boolean;
}
