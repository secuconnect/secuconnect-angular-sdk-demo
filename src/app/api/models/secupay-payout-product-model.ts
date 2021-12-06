// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {Currency} from './currency';
import {MoneyAmount} from './money-amount';
import {PaymentInformation} from './payment-information';
import {SecupayTransactionListItem} from './secupay-transaction-list-item';

export class SecupayPayoutProductModel extends BaseProductModel {
  /**
   * ID of transaction
   */
  transId?: number;
  /**
   * Transaction status
   */
  status?: string;
  amount?: MoneyAmount;
  currency?: Currency;
  /**
   * The purpose of the payment. This is the later assignment of the payment is for example on the account statement of the buyer.
   */
  purpose?: string;
  /**
   * Specifying an order number. Depending on the contract setting, this must be unique for each payment.
   */
  orderId?: string;
  /**
   * Transaction status (number)
   */
  transactionStatus?: string;
  /**
   * A list of transaction items
   */
  transactionList?: Array<SecupayTransactionListItem>;
  /**
   * The purpose the payer needs to use for his transfer
   */
  transferPurpose?: string;
  transferAccount?: PaymentInformation;
}
