// noinspection JSUnusedGlobalSymbols

import {LoyaltyMerchantcardsProductModel} from './loyalty-merchantcards-product-model';
import {MoneyAmount} from './money-amount';
import {ReceiptType} from './receipt-type';
import {ReceiptTypeValue} from './receipt-type-value';

export class LoyaltyMerchantcardsProductWithReceiptModel extends LoyaltyMerchantcardsProductModel {
  /**
   * Receipt header
   */
  receiptHeader?: Array<ReceiptType>;
  /**
   * Receipt
   */
  receipt?: Array<ReceiptTypeValue>;
  /**
   * Created TransactionId
   */
  transId?: number;
  amount?: MoneyAmount;
}
