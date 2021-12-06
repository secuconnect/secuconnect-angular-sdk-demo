// noinspection JSUnusedGlobalSymbols

import {MoneyAmount} from './money-amount';
import {PaymentContractsProductModel} from './payment-contracts-product-model';

export class SecupayTransactionCancelDTO {
  contract?: PaymentContractsProductModel;
  amount?: MoneyAmount;
  /**
   * Mixed-Basket: (percentage) reduce the stakeholder amount too
   */
  reduceStakeholderPayment?: boolean;
}
