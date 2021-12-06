// noinspection JSUnusedGlobalSymbols

import {EanOrGtin} from './ean-or-gtin';
import {MoneyAmount} from './money-amount';
import {SmartTransactionsBasketProductGroup} from './smart-transactions-basket-product-group';
import {TaxRate} from './tax-rate';

export class SmartTransactionsSubBasketProduct {
  /**
   * Product id
   */
  id?: number;
  /**
   * Parent
   */
  parent?: number;
  /**
   * Category of item
   */
  itemType?: string;
  /**
   * Description of the sub-basket product
   */
  desc?: string;
  /**
   * Article number
   */
  articleNumber?: string;
  /**
   * The serialnumber of the scanned posa card
   */
  serialNumber?: string;
  ean?: EanOrGtin;
  /**
   * Quantity
   */
  quantity?: number;
  priceOne?: MoneyAmount;
  sum?: number;
  tax?: TaxRate;
  /**
   * The reference_id must be unique, it's Referring to the reference_id of SmartTransactionsBasketProduct [example: SmartTransactionsBasketProduct->reference_id is 1000 then all SmartTransactionsSubBasketProduct must have unique reference_id like 1000.1, 1000.2 etc.]
   */
  referenceId?: string;
  /**
   * contract id
   */
  contractId?: string;
  /**
   * Group
   */
  group?: Array<SmartTransactionsBasketProductGroup>;
}
