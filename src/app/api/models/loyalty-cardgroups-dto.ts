// noinspection JSUnusedGlobalSymbols

import {LoyaltyCardgroupsDTOMerchant} from './loyalty-cardgroups-dto-merchant';

export class LoyaltyCardgroupsDTO {
  /**
   * Display name
   */
  displayName?: string;
  /**
   * Display name raw
   */
  displayNameRaw?: string;
  /**
   * Stock warn limit
   */
  stockWarnLimit?: string;
  /**
   * Picture
   */
  picture?: string;
  merchant?: LoyaltyCardgroupsDTOMerchant;
}
