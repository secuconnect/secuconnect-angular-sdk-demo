// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {Currency} from './currency';
import {GeneralMerchantsProductModel} from './general-merchants-product-model';
import {GeneralStoresProductModel} from './general-stores-product-model';
import {IsoDateTime} from './iso-date-time';
import {MoneyAmount} from './money-amount';
import {ParentObj} from './parent-obj';
import {PaymentTransactionsProductModelCustomer} from './payment-transactions-product-model-customer';
import {PaymentTransactionsProductModelDetails} from './payment-transactions-product-model-details';
import {ProductInstanceUID} from './product-instance-uid';

/**
 * The Payment Transaction manages the payment process, from authorization till the payment is really executed.
 */
export class PaymentTransactionsProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  platform?: ProductInstanceUID;
  merchant?: GeneralMerchantsProductModel;
  store?: GeneralStoresProductModel;
  /**
   * Transaction ID in secupay Frontend
   */
  transId?: number;
  /**
   * Parent transactions
   */
  parents?: Array<ParentObj>;
  /**
   * Payment product ID
   */
  productId?: number;
  /**
   * Payment product type
   */
  product?: string;
  /**
   * Payment product name
   */
  productRaw?: string;
  /**
   * Internal ID of the payment instrument
   */
  zahlungsmittelId?: number;
  /**
   * Merchant's contract ID
   */
  contractId?: number;
  amount?: MoneyAmount;
  currency?: Currency;
  /**
   * Transaction status ID
   */
  status?: number;
  /**
   * Transaction status description
   */
  statusText?: string;
  /**
   * Date when the payment was received
   */
  incomingPaymentDate?: string;
  details?: PaymentTransactionsProductModelDetails;
  customer?: PaymentTransactionsProductModelCustomer;
  /**
   * Terminal-ID
   */
  tid?: string;
  /**
   * Data of the used payment instrument
   */
  paymentData?: string;
  /**
   * Store name
   */
  storeName?: string;
  /**
   * Date when the payout was created
   */
  payoutDate?: string;
  /**
   * Invoice number (from merchant)
   */
  invoiceNumber?: string;
  /**
   * Payment-ID
   */
  transactionHash?: string;
  /**
   * Reference ID
   */
  referenceId?: string;
  /**
   * Name of the bank account owner
   */
  accountOwner?: string;
  /**
   * Accrual Flag
   */
  accrual?: boolean;
}
