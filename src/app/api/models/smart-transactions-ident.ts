// noinspection JSUnusedGlobalSymbols

import {LoyaltyMerchantcardsProductModel} from './loyalty-merchantcards-product-model';

export class SmartTransactionsIdent {
  /**
   * Object of smart transaction ident
   */
  object?: string;
  /**
   * Id of smart transaction ident
   */
  id?: string;
  /**
   * Prefix
   */
  prefix?: string;
  /**
   * Name
   */
  name?: string;
  /**
   * Type
   */
  type?: string;
  /**
   * Value
   */
  value?: string;
  /**
   * Valid
   */
  valid?: boolean;
  merchantcard?: LoyaltyMerchantcardsProductModel;
}
