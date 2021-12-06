// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {IsoDateTime} from './iso-date-time';
import {PaymentInformation} from './payment-information';
import {ProductInstanceUID} from './product-instance-uid';

export class PaymentContractsProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  parent?: ProductInstanceUID;
  payInAccount?: PaymentInformation;
  /**
   * Is this a demo contract
   */
  demo?: boolean;
}
