// noinspection JSUnusedGlobalSymbols

import {PaymentCancelResultDetails} from './payment-cancel-result-details';

/**
 * Refund information
 */
export class PaymentCancelResult {
  /**
   * The transaction ID of the refund transaction
   */
  newTransId?: number;
  /**
   * Demo
   */
  demo?: boolean;
  result?: PaymentCancelResultDetails;
}
