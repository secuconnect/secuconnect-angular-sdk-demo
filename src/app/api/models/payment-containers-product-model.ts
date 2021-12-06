// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {IsoDateTime} from './iso-date-time';
import {OneOfPaymentContainersDTOModelPrivate} from './one-of-payment-containers-dto-model-private';
import {PaymentContainerMandate} from './payment-container-mandate';
import {PaymentContractsProductModel} from './payment-contracts-product-model';
import {PaymentCustomersProductModel} from './payment-customers-product-model';
import {ProductInstanceUID} from './product-instance-uid';

export class PaymentContainersProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  contract?: PaymentContractsProductModel;
  customer?: PaymentCustomersProductModel;
  assign?: ProductInstanceUID;
  /**
   * Type of payment container
   */
  type?: string;
  _public?: OneOfPaymentContainersDTOModelPrivate;
  _private?: OneOfPaymentContainersDTOModelPrivate;
  mandate?: PaymentContainerMandate;
}
