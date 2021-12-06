// noinspection JSUnusedGlobalSymbols

import {MoneyAmount} from './money-amount';

export class PaymentTransactionCancelDTO {
  /**
   * The reason of this cancel or refund
   */
  reason?: string;
  amount?: MoneyAmount;
  /**
   * Mixed-Basket: (percentage) reduce the stakeholder amount too
   */
  reduceStakeholderPayment?: boolean;
  /**
   * Payment Container ID
   */
  containerId?: string;
}
