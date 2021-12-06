// noinspection JSUnusedGlobalSymbols


export class SmartTransactionsPaymentLinks {
  /**
   * process with pay in advance
   */
  prepaid?: string;
  /**
   * process with SEAP direct debit
   */
  debit?: string;
  /**
   * process with credit card
   */
  creditcard?: string;
  /**
   * process with pay on invoice
   */
  invoice?: string;
  /**
   * process with PayPal
   */
  paypal?: string;
  /**
   * process with Sofort
   */
  sofort?: string;
  /**
   * process with selecting a payment method
   */
  general?: string;
}
