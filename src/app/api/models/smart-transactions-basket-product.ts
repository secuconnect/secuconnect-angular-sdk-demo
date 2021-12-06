// noinspection JSUnusedGlobalSymbols

import {EanOrGtin} from './ean-or-gtin';
import {MoneyAmount} from './money-amount';
import {SmartTransactionsBasketProductGroup} from './smart-transactions-basket-product-group';
import {SmartTransactionsSubBasketProduct} from './smart-transactions-sub-basket-product';
import {TaxRate} from './tax-rate';

export class SmartTransactionsBasketProduct {
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
   * Desc
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
  /**
   * it is the value of the sum of the product with all items in sub_basket
   */
  sum?: number;
  tax?: TaxRate;
  /**
   * The reference_id must be unique, it's a Reference for to the reference_id of SmartTransactionsSubBasketProduct [example: SmartTransactionsBasketProduct->reference_id is 1000 then all SmartTransactionsSubBasketProduct must have unique reference_id like 1000.1, 1000.2 etc.]
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
  /**
   * sub basket Product
   */
  subBasket?: Array<SmartTransactionsSubBasketProduct>;
}
