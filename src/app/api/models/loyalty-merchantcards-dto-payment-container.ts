// noinspection JSUnusedGlobalSymbols

import {PaymentInformation} from './payment-information';

export class LoyaltyMerchantcardsDTOPaymentContainer {
  /**
   * Object of payment container
   */
  object?: string;
  /**
   * Id of payment container
   */
  id?: string;
  /**
   * Type of payment container
   */
  type?: string;
  paymentInformation?: PaymentInformation;
}
