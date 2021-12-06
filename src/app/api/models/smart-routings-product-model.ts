// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {IsoDateTime} from './iso-date-time';
import {ProductInstanceUID} from './product-instance-uid';
import {SmartRoutingsAssign} from './smart-routings-assign';
import {Store} from './store';

export class SmartRoutingsProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  merchant?: ProductInstanceUID;
  store?: Store;
  /**
   * Description
   */
  description?: string;
  /**
   * Assign
   */
  assign?: Array<SmartRoutingsAssign>;
}
