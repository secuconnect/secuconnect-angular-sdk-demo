// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {Contact} from './contact';
import {IsoDateTime} from './iso-date-time';
import {LoyaltyCustomersPaymentContainerModel} from './loyalty-customers-payment-container-model';
import {ProductInstanceUID} from './product-instance-uid';

export class LoyaltyCustomersProductModel extends BaseProductModel {
  created?: IsoDateTime;
  merchant?: ProductInstanceUID;
  contact?: Contact;
  merchantContact?: Contact;
  accountContact?: Contact;
  /**
   * payment container
   */
  paymentContainer?: Array<LoyaltyCustomersPaymentContainerModel>;
  /**
   * Customer number
   */
  customernumber?: string;
  /**
   * Customer number
   */
  note?: string;
}
