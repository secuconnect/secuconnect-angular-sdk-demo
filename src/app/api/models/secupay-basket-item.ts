// noinspection JSUnusedGlobalSymbols

import {SecupayBaseBasketItem} from './secupay-base-basket-item';

/**
 * Item describing single position in basket in transaction
 */
export class SecupayBasketItem extends SecupayBaseBasketItem {
  /**
   * Mixed-Basket: All basket items for one merchant.
   */
  subBasket?: Array<SecupayBasketItem>;
}
