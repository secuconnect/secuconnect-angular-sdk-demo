// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {Currency} from './currency';
import {ItemGroup} from './item-group';

export class PrepaidItemsProductModel extends BaseProductModel {
  /**
   * Retail price
   */
  retailPrice?: number;
  currency?: Currency;
  /**
   * Description
   */
  description?: string;
  /**
   * Logo
   */
  logo?: string;
  /**
   * Commission
   */
  commission?: number;
  /**
   * Vtc id
   */
  vtcId?: string;
  itemgroup?: ItemGroup;
  /**
   * Stock limit max
   */
  stockLimitMax?: number;
  /**
   * Stock limit min
   */
  stockLimitMin?: number;
  /**
   * Taxable
   */
  taxable?: boolean;
  /**
   * Type
   */
  type?: string;
}
