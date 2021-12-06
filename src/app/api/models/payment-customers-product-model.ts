// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {Contact} from './contact';
import {IsoDateTime} from './iso-date-time';
import {ProductInstanceUID} from './product-instance-uid';

export class PaymentCustomersProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  contract?: ProductInstanceUID;
  contact?: Contact;
}
