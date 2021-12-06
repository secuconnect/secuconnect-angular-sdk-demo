// noinspection JSUnusedGlobalSymbols

import {BillingCyclesItem} from './billing-cycles-item';
import {GeneralMerchantsProductModel} from './general-merchants-product-model';

export class PaymentPlansDTO {
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
