// noinspection JSUnusedGlobalSymbols


/**
 * Credit card details
 */
export class CreditCardDescriptor {
  /**
   * Card holder
   */
  owner?: string;
  /**
   * Truncated Primary Account Number (PAN)
   */
  pan?: string;
  /**
   * Date and time when the card will expire; the system must pass 2023-07-01T00:00:00 if the card is valid thru 06/23
   */
  expirationDate?: string;
  /**
   * Card brand or scheme like VISA, or MasterCard
   */
  issuer?: string;
  /**
   * transact container
   */
  transactContainer?: string;
  /**
   * transact public key
   */
  transactSkeyPubkey?: string;
  /**
   * transact key name
   */
  transactSkeyKeyname?: string;
  /**
   * transact hash
   */
  transactHash?: string;
}
