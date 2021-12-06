// noinspection JSUnusedGlobalSymbols

import {EanOrGtin} from './ean-or-gtin';
import {MoneyAmount} from './money-amount';
import {TaxRate} from './tax-rate';

export class SmartTransactionsBaseProduct {
  /**
   * Bonus Product ID
   */
  id?: number;
  tax?: TaxRate;
  priceOne?: MoneyAmount;
  /**
   * amount of bonus products
   */
  quantity?: number;
  /**
   * description
   */
  desc?: string;
  /**
   * article Number
   */
  articleNumber?: string;
  ean?: EanOrGtin;
}
