// noinspection JSUnusedGlobalSymbols

import {SmartDevicesProducts} from './smart-devices-products';

export class SmartDevicesDTO {
  /**
   * Merchant
   */
  merchant?: string;
  /**
   * Store
   */
  store?: string;
  /**
   * Device
   */
  device?: string;
  /**
   * Contract
   */
  contract?: string;
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
  /**
   * Description
   */
  description?: string;
  /**
   * TID
   */
  tid?: string;
  products?: SmartDevicesProducts;
  /**
   * Terminal type
   */
  terminalType?: string;
  /**
   * Base version
   */
  baseVersion?: string;
}
