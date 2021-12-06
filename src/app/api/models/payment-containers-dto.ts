// noinspection JSUnusedGlobalSymbols

import {OneOfPaymentContainersDTOModelPrivate} from './one-of-payment-containers-dto-model-private';
import {PaymentContainersDTOCustomer} from './payment-containers-dto-customer';

export class PaymentContainersDTO {
  customer?: PaymentContainersDTOCustomer;
  /**
   * Payment-Customer-ID
   */
  customerId?: string;
  /**
   * Type of Payment Containers
   */
  type?: string;
  _private?: OneOfPaymentContainersDTOModelPrivate;
}
