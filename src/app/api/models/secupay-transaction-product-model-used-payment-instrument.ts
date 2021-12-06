// noinspection JSUnusedGlobalSymbols

import {OneOfPaymentContainersDTOModelPrivate} from './one-of-payment-containers-dto-model-private';

/**
 * The payment data which has the payer used (like bank account, credit card, ...). This data is always masked.
 */
export class SecupayTransactionProductModelUsedPaymentInstrument {
  /**
   * The type of the payment instrument data, like: 'bank_account' or 'credit_card'
   */
  type?: string;
  data?: OneOfPaymentContainersDTOModelPrivate;
}
