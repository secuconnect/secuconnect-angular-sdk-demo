// noinspection JSUnusedGlobalSymbols

import {MoneyAmount} from './money-amount';

/**
 * Transaction details
 */
export class PaymentTransactionsProductModelDetails {
  amount?: MoneyAmount;
  /**
   * Clearing status
   */
  cleared?: string;
  /**
   * Transaction status ID
   */
  status?: number;
  /**
   * Transaction status description
   */
  statusText?: string;
  /**
   * Transaction simple-status ID
   */
  statusSimple?: number;
  /**
   * Transaction simple-status description
   */
  statusTextSimple?: string;
  /**
   * Transaction description
   */
  description?: string;
  /**
   * Transaction description (plain text)
   */
  descriptionRaw?: string;
}
