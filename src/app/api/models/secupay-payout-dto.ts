// noinspection JSUnusedGlobalSymbols

import {Currency} from './currency';
import {MoneyAmount} from './money-amount';
import {PaymentCustomersProductModel} from './payment-customers-product-model';
import {SecupayPayoutDTOOptData} from './secupay-payout-dto-opt-data';
import {SecupayRedirectUrl} from './secupay-redirect-url';
import {SecupayTransactionListItem} from './secupay-transaction-list-item';

export class SecupayPayoutDTO {
  redirectUrl?: SecupayRedirectUrl;
  /**
   * The contract ID
   */
  contract?: string;
  customer?: PaymentCustomersProductModel;
  optData?: SecupayPayoutDTOOptData;
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
   * A list of transaction items
   */
  transactionList?: Array<SecupayTransactionListItem>;
}
