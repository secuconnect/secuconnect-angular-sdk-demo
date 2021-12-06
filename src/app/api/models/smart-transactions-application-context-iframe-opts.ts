// noinspection JSUnusedGlobalSymbols

import {SmartTransactionsReceipt} from './smart-transactions-receipt';

export class SmartTransactionsApplicationContextIframeOpts {
  /**
   * payment hint title
   */
  paymentHintTitle?: string;
  /**
   * payment hint
   */
  paymentHint?: Array<SmartTransactionsReceipt>;
  /**
   * project name
   */
  projectTitle?: string;
  /**
   * title of the submit button
   */
  submitButtonTitle?: string;
  /**
   * title of the cancel button
   */
  cancelButtonTitle?: string;
  /**
   * language
   */
  language?: string;
  /**
   * basket title
   */
  basketTitle?: string;
  /**
   * hide disclaimer
   */
  hideDisclaimer?: boolean;
  /**
   * has accepted disclaimer
   */
  hasAcceptedDisclaimer?: boolean;
}
