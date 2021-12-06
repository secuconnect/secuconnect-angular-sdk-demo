// noinspection JSUnusedGlobalSymbols

import {PaymentInformation} from './payment-information';

export class PaymentContractsDTOClone {
  /**
   * Name of the project (must be unique)
   */
  project?: string;
  paymentData?: PaymentInformation;
  /**
   * Pay in account
   */
  payinAccount?: boolean;
  /**
   * The default URL where your service listen for push notifications of the secuconnect service
   */
  urlPush?: string;
}
