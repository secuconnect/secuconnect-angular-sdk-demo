// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {Currency} from './currency';
import {IsoDateTime} from './iso-date-time';
import {LoyaltyTransactionsDTOCard} from './loyalty-transactions-dto-card';
import {LoyaltyTransactionsDTOCardgroup} from './loyalty-transactions-dto-cardgroup';
import {LoyaltyTransactionsDTOMerchant} from './loyalty-transactions-dto-merchant';
import {LoyaltyTransactionsDTOMerchantcard} from './loyalty-transactions-dto-merchantcard';
import {LoyaltyTransactionsDTORelatedTransactions} from './loyalty-transactions-dto-related-transactions';
import {LoyaltyTransactionsDTOStore} from './loyalty-transactions-dto-store';
import {MoneyAmount} from './money-amount';
import {ReceiptTypeValue} from './receipt-type-value';

export class LoyaltyTransactionsProductModel extends BaseProductModel {
  created?: IsoDateTime;
  merchant?: LoyaltyTransactionsDTOMerchant;
  cardgroup?: LoyaltyTransactionsDTOCardgroup;
  store?: LoyaltyTransactionsDTOStore;
  merchantcard?: LoyaltyTransactionsDTOMerchantcard;
  card?: LoyaltyTransactionsDTOCard;
  /**
   * LoyaltyTransactionsProductModel
   */
  parents?: Array<LoyaltyTransactionsDTORelatedTransactions>;
  /**
   * LoyaltyTransactionsProductModel
   */
  children?: Array<LoyaltyTransactionsDTORelatedTransactions>;
  /**
   * The TID of the processed Smart Device
   */
  tid?: string;
  /**
   * The status text of the Loyalty Transaction
   */
  status?: string;
  amount?: MoneyAmount;
  currency?: Currency;
  /**
   * The balance of the merchantcard after this Loyalty Transaction
   */
  balance?: number;
  /**
   * Loyalty Transaction type
   */
  description?: string;
  /**
   * Last change oif this transaction, most like a status change
   */
  lastChangee?: string;
  /**
   * Receipt
   */
  receipt?: Array<ReceiptTypeValue>;
  /**
   * Indicator for a cancelling transaction (1 = full-cancel, 3 = partial-cancel)
   */
  isCancelling?: number;
}
