// noinspection JSUnusedGlobalSymbols

import {MoneyAmount} from './money-amount';

export class SecupayTransactionListItem {
  /**
   * Category of item
   */
  itemType?: string;
  /**
   * Reference id - must be unique for the entire basket
   */
  referenceId?: string;
  /**
   * Item name
   */
  name?: string;
  /**
   * Id of transaction
   */
  transactionHash?: string;
  /**
   * Id of transaction
   */
  transactionId?: string;
  /**
   * Payment Container ID
   */
  containerId?: string;
  total?: MoneyAmount;
}
