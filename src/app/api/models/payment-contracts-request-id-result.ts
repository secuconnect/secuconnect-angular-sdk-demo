// noinspection JSUnusedGlobalSymbols

import {PaymentInformation} from './payment-information';
import {ProductInstanceUID} from './product-instance-uid';

export class PaymentContractsRequestIdResult {
  contract?: ProductInstanceUID;
  merchant?: ProductInstanceUID;
  store?: ProductInstanceUID;
  /**
   * Returns the apikey of the created merchant
   */
  apikey?: string;
  payinAccount?: PaymentInformation;
}
