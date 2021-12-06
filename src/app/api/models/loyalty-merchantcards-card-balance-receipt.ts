// noinspection JSUnusedGlobalSymbols

import {ReceiptType} from './receipt-type';
import {ReceiptTypeValue} from './receipt-type-value';

export class LoyaltyMerchantcardsCardBalanceReceipt {
  /**
   * Result has true or false value
   */
  valid?: boolean;
  /**
   * The total cash balance of the card
   */
  balance?: number;
  /**
   * The total points balance of the card
   */
  points?: number;
  /**
   * Result has true or false value
   */
  newPasscode?: boolean;
  /**
   * Receipt header
   */
  receiptHeader?: Array<ReceiptType>;
  /**
   * Receipt
   */
  receipt?: Array<ReceiptTypeValue>;
  /**
   * Result has true or false value
   */
  amountSplitEnabled?: boolean;
  /**
   * Result has true or false value
   */
  limitAllowed?: boolean;
  /**
   * A formatted string of the limit in euro with currency code
   */
  limitStr?: string;
  /**
   * How much the card balance can be negative, zero means unlimited in case limit_allowed is true
   */
  limit?: number;
}
