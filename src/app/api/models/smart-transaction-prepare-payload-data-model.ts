// noinspection JSUnusedGlobalSymbols


export class SmartTransactionPreparePayloadDataModel {
  /**
   * Callback urls
   */
  callbackUrls?: Array<string>;
  /**
   * Email
   */
  email?: string;
  /**
   * Mode
   */
  mode?: string;
  /**
   * Information whether a smart transaction is PayPal basic or not
   */
  isPaypalBasic?: boolean;
}
