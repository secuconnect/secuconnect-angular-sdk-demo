// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {BillingCyclesItem} from './billing-cycles-item';
import {GeneralMerchantsProductModel} from './general-merchants-product-model';
import {IsoDateTime} from './iso-date-time';

export class PaymentPlansProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  /**
   * Description of payment plan
   */
  description?: string;
  /**
   * ISO currency code
   */
  currency?: string;
  /**
   * Payment plan id
   */
  paypalPlanId?: string;
  /**
   * Payment plan status
   */
  status?: string;
  /**
   * Payment methods
   */
  paymentMethods?: Array<string>;
  merchant?: GeneralMerchantsProductModel;
  /**
   * Billing cycles
   */
  billingCycles?: Array<BillingCyclesItem>;
}
