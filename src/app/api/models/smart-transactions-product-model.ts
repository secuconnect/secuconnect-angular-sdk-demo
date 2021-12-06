// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {IsoDateTime} from './iso-date-time';
import {MoneyAmount} from './money-amount';
import {OneOfSmartTransactionsDeliveryOptionsModel} from './one-of-smart-transactions-delivery-options-model';
import {PaymentContext} from './payment-context';
import {PaymentCustomersProductModel} from './payment-customers-product-model';
import {PaymentInstructions} from './payment-instructions';
import {PaymentTransactionsProductModel} from './payment-transactions-product-model';
import {ProductInstanceUID} from './product-instance-uid';
import {SmartTransactionsApplicationContext} from './smart-transactions-application-context';
import {SmartTransactionsBasket} from './smart-transactions-basket';
import {SmartTransactionsBasketInfo} from './smart-transactions-basket-info';
import {SmartTransactionsCheckin} from './smart-transactions-checkin';
import {SmartTransactionsCheckoutLinks} from './smart-transactions-checkout-links';
import {SmartTransactionsCommunication} from './smart-transactions-communication';
import {SmartTransactionsContainer} from './smart-transactions-container';
import {SmartTransactionsIdent} from './smart-transactions-ident';
import {SmartTransactionsMerchant} from './smart-transactions-merchant';
import {SmartTransactionsPaymentLinks} from './smart-transactions-payment-links';
import {SmartTransactionsPrepaidSalesDetails} from './smart-transactions-prepaid-sales-details';
import {SmartTransactionsReceipt} from './smart-transactions-receipt';
import {TaxRate} from './tax-rate';

export class SmartTransactionsProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  /**
   * Status of smart transaction
   */
  status?: string;
  merchant?: SmartTransactionsMerchant;
  contract?: ProductInstanceUID;
  providerContract?: ProductInstanceUID;
  customer?: PaymentCustomersProductModel;
  shippingAddress?: PaymentCustomersProductModel;
  container?: SmartTransactionsContainer;
  checkin?: SmartTransactionsCheckin;
  /**
   * Merchant reference
   */
  merchantRef?: string;
  /**
   * Transaction reference
   */
  transactionRef?: string;
  store?: ProductInstanceUID;
  deviceSource?: ProductInstanceUID;
  deviceDestination?: ProductInstanceUID;
  /**
   * Receipt number
   */
  receiptNumber?: number;
  /**
   * Receipt
   */
  receipt?: Array<SmartTransactionsReceipt>;
  /**
   * Receipt merchant
   */
  receiptMerchant?: Array<SmartTransactionsReceipt>;
  /**
   * Receipt merchant print
   */
  receiptMerchantPrint?: boolean;
  basketInfo?: SmartTransactionsBasketInfo;
  basket?: SmartTransactionsBasket;
  /**
   * Idents
   */
  idents?: Array<SmartTransactionsIdent>;
  taxRate?: TaxRate;
  taxAmount?: MoneyAmount;
  /**
   * Cashier
   */
  cashier?: string;
  /**
   * Market
   */
  market?: string;
  deliveryOptions?: OneOfSmartTransactionsDeliveryOptionsModel;
  /**
   * Product
   */
  product?: string;
  /**
   * Transaction id
   */
  transId?: number;
  /**
   * Payment method
   */
  paymentMethod?: string;
  /**
   * Payment Transactions
   */
  transactions?: Array<PaymentTransactionsProductModel>;
  /**
   * Last visited page
   */
  lastVisitedPage?: string;
  /**
   * Demo payment
   */
  isDemo?: boolean;
  checkoutLinks?: SmartTransactionsCheckoutLinks;
  /**
   * intent of transaction
   */
  intent?: string;
  /**
   * IFrame URL
   */
  iframeUrl?: string;
  prepaidSales?: SmartTransactionsPrepaidSalesDetails;
  communications?: SmartTransactionsCommunication;
  paymentLinks?: SmartTransactionsPaymentLinks;
  applicationContext?: SmartTransactionsApplicationContext;
  paymentInstructions?: PaymentInstructions;
  paymentContext?: PaymentContext;
}
