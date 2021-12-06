// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {LoyaltyCardgroupsDTOMerchant} from './loyalty-cardgroups-dto-merchant';

export class LoyaltyCardgroupsProductModel extends BaseProductModel {
  merchant?: LoyaltyCardgroupsDTOMerchant;
  /**
   * Loyalty card group display name
   */
  displayName?: string;
  /**
   * Loyalty card group display name raw
   */
  displayNameRaw?: string;
  /**
   * Loyalty card group stock warn limit
   */
  stockWarnLimit?: string;
  /**
   * Loyalty card group picture
   */
  picture?: string;
}
