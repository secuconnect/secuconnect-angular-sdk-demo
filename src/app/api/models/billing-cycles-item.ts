// noinspection JSUnusedGlobalSymbols

import {PaymentPlanInterval} from './payment-plan-interval';

export class BillingCyclesItem {
  /**
   * sequence
   */
  sequence?: number;
  interval?: PaymentPlanInterval;
  /**
   * Tenure type
   */
  tenureType?: string;
  /**
   * Total cycles
   */
  totalCycles?: number;
  /**
   * Price
   */
  price?: number;
}
