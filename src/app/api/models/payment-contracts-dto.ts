// noinspection JSUnusedGlobalSymbols


export class PaymentContractsDTO {
  /**
   * Contracts Merchant
   */
  merchant?: string;
  /**
   * The internal user id
   */
  internalReference?: string;
  /**
   * Contracts id
   */
  contractId?: string;
  /**
   * Is this a demo contract
   */
  demo?: string;
  /**
   * An URL where your service listen for push notifications of the secuconnect service
   */
  urlPush?: string;
  /**
   * Bool, default FALSE. If TRUE, an error message will be thrown if you try to create a new payment transaction with the same order_id of an previous transaction.
   */
  uniqueOrderId?: boolean;
  /**
   * Bool, default TRUE. If FALSE, the customer scoring is disabled for your payment contract
   */
  scoring?: boolean;
}
