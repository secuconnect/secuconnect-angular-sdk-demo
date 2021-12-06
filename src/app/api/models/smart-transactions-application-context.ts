// noinspection JSUnusedGlobalSymbols

import {SmartTransactionsApplicationContextIframeOpts} from './smart-transactions-application-context-iframe-opts';
import {SmartTransactionsApplicationContextLocks} from './smart-transactions-application-context-locks';
import {SmartTransactionsApplicationContextReturnUrls} from './smart-transactions-application-context-return-urls';

export class SmartTransactionsApplicationContext {
  locks?: SmartTransactionsApplicationContextLocks;
  returnUrls?: SmartTransactionsApplicationContextReturnUrls;
  iframeOpts?: SmartTransactionsApplicationContextIframeOpts;
  /**
   * Smart Checkout Template ID
   */
  checkoutTemplate?: string;
}
