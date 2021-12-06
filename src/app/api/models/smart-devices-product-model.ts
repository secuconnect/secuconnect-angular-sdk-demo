// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {IsoDateTime} from './iso-date-time';
import {ProductInstanceUID} from './product-instance-uid';
import {SmartDevicesDevice} from './smart-devices-device';
import {SmartDevicesProducts} from './smart-devices-products';
import {Store} from './store';

export class SmartDevicesProductModel extends BaseProductModel {
  created?: IsoDateTime;
  merchant?: ProductInstanceUID;
  store?: Store;
  contract?: ProductInstanceUID;
  /**
   * Vendor
   */
  vendor?: string;
  /**
   * Vendor uid
   */
  vendorUid?: string;
  /**
   * Type
   */
  type?: string;
  device?: SmartDevicesDevice;
  routing?: ProductInstanceUID;
  /**
   * User pin
   */
  userPin?: string;
  products?: SmartDevicesProducts;
  /**
   * Description
   */
  description?: string;
  /**
   * TID
   */
  tid?: string;
  /**
   * Idle screen register
   */
  idleScreenRegister?: string;
  /**
   * Idle screen terminal
   */
  idleScreenTerminal?: string;
  /**
   * Online
   */
  online?: boolean;
  /**
   * Last refresh timestamp
   */
  refresh?: number;
  /**
   * Terminal type
   */
  terminalType?: string;
  /**
   * Base version
   */
  baseVersion?: string;
}
