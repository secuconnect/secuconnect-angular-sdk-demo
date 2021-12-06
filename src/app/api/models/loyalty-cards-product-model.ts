// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {IsoDateTime} from './iso-date-time';
import {LoyaltyCardsDTOAccount} from './loyalty-cards-dto-account';

export class LoyaltyCardsProductModel extends BaseProductModel {
  created?: IsoDateTime;
  account?: LoyaltyCardsDTOAccount;
  /**
   * Loyalty card number
   */
  cardnumber?: string;
}
