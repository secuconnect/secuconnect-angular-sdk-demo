// noinspection JSUnusedGlobalSymbols


/**
 * Bank details for withdrawals
 */
export class PaymentInformation {
  /**
   * International Bank Account Number (IBAN)
   */
  iban?: string;
  /**
   * Bank Identifier Code (BIC), or formerly SWIFT code
   */
  bic?: string;
  /**
   * Account owner name
   */
  owner?: string;
  /**
   * Bank name
   */
  bankname?: string;
}
