// noinspection JSUnusedGlobalSymbols


/**
 * Refund information
 */
export class PaymentCancelResultDetails {
  /**
   * The transaction ID of the refund transaction
   */
  newTransId?: number;
  /**
   * The remaining amount in case of a partial refund/cancel
   */
  remainingAmount?: number;
  /**
   * If the merchant needs to transfer money back, this will be true
   */
  refundWaitingForPayment?: boolean;
}
