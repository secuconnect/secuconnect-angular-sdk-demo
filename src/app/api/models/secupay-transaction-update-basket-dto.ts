// noinspection JSUnusedGlobalSymbols

import {PaymentContractsProductModel} from './payment-contracts-product-model';
import {SecupayBasketItem} from './secupay-basket-item';

export class SecupayTransactionUpdateBasketDTO {
  contract?: PaymentContractsProductModel;
  /**
   * A list of items that are being purchased.
   */
  basket?: Array<SecupayBasketItem>;
}
