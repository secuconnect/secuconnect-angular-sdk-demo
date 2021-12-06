// noinspection JSUnusedGlobalSymbols

import {MoneyAmount} from './money-amount';

export class LoyaltyMerchantcardsDTOTransaction {
  /**
   * Action
   */
  action?: string;
  /**
   * Terminal id
   */
  terminalId?: string;
  amount?: MoneyAmount;
  /**
   * Tid
   */
  tid?: string;
  /**
   * Store id
   */
  store?: string;
  /**
   * Card number
   */
  cardnumber?: number;
  /**
   * Bonus amount
   */
  bonusAmount?: number;
  /**
   * Amount split allowed
   */
  amountSplitAllowed?: string;
  /**
   * Merchant id
   */
  merchantId?: string;
}
