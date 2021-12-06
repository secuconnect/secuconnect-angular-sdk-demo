// noinspection JSUnusedGlobalSymbols

import {EanOrGtin} from './ean-or-gtin';
import {MoneyAmount} from './money-amount';

/**
 * Item describing single position in basket in transaction
 */
export class SecupayBaseBasketItem {
  /**
   * Line type {'article', 'sub_transaction', 'stakeholder_payment', 'shipping', 'subscription'}
   */
  itemType?: string;
  /**
   * Your article number, storage key unit (SKU)
   */
  articleNumber?: string;
  /**
   * Quantity of articles in item
   */
  quantity?: number;
  /**
   * Descriptive article name
   */
  name?: string;
  /**
   * Model of item
   */
  model?: string;
  ean?: EanOrGtin;
  /**
   * Tax rate in percent (integer values only)
   */
  tax?: string;
  total?: MoneyAmount;
  price?: MoneyAmount;
  /**
   * API key (only for stakeholder payments)
   */
  apikey?: string;
  /**
   * Subscription plan id
   */
  planId?: string;
  /**
   * Subscription start at date
   */
  startAt?: string;
  /**
   * Original transaction hash (only for payouts)
   */
  transactionHash?: string;
  /**
   * Contract ID (only for stakeholder payments)
   */
  contractId?: string;
  /**
   * Unique line identifier, used to maintain the basket before the transaction is executed
   */
  referenceId?: string;
}
