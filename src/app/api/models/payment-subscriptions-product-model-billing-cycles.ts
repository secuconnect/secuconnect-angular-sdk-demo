// noinspection JSUnusedGlobalSymbols

import {BillingCyclesItem} from './billing-cycles-item';

/**
 * Billing cycles
 */
export class PaymentSubscriptionsProductModelBillingCycles {
  /**
   * cycle executions
   */
  cycleExecutions?: Array<BillingCyclesItem>;
  /**
   * next billing time
   */
  nextBillingTime?: string;
}
