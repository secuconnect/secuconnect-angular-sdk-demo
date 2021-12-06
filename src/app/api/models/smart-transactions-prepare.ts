// noinspection JSUnusedGlobalSymbols

import {ProductInstanceUID} from './product-instance-uid';
import {SmartTransactionsPrepareCallbackUrls} from './smart-transactions-prepare-callback-urls';

export class SmartTransactionsPrepare {
  customer?: ProductInstanceUID;
  container?: ProductInstanceUID;
  /**
   * Method
   */
  method?: string;
  callbackUrls?: SmartTransactionsPrepareCallbackUrls;
  /**
   * Email
   */
  email?: string;
  deviceSource?: ProductInstanceUID;
  /**
   * Mode
   */
  mode?: string;
  /**
   * Is paypal basic or not
   */
  isPaypalBasic?: boolean;
  /**
   * Is demo or not
   */
  isDemo?: boolean;
}
