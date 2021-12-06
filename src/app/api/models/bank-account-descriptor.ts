// noinspection JSUnusedGlobalSymbols


/**
 * Bank details for money transfers
 */
export class BankAccountDescriptor {
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
  /**
   * Purpose to use
   */
  purpose?: string;
}
