// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {IsoDateTime} from './iso-date-time';
import {PaymentSubscriptionsProductModelBillingCycles} from './payment-subscriptions-product-model-billing-cycles';

export class PaymentSubscriptionsProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  smartTransaction?: BaseProductModel;
  merchant?: BaseProductModel;
  contract?: BaseProductModel;
  customer?: BaseProductModel;
  container?: BaseProductModel;
  plan?: BaseProductModel;
  /**
   * start at
   */
  startAt?: string;
  /**
   * status
   */
  status?: string;
  /**
   * paypal_subscription_id
   */
  paypalSubscriptionId?: string;
  billingCycles?: PaymentSubscriptionsProductModelBillingCycles;
}
