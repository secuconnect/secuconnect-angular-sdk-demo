// noinspection JSUnusedGlobalSymbols

import {MoneyAmount} from './money-amount';
import {OneOfSmartTransactionsDeliveryOptionsModel} from './one-of-smart-transactions-delivery-options-model';
import {PaymentContext} from './payment-context';
import {PaymentCustomersProductModel} from './payment-customers-product-model';
import {ProductInstanceID} from './product-instance-id';
import {ProductInstanceUID} from './product-instance-uid';
import {SmartTransactionsApplicationContext} from './smart-transactions-application-context';
import {SmartTransactionsBasket} from './smart-transactions-basket';
import {SmartTransactionsBasketInfo} from './smart-transactions-basket-info';
import {SmartTransactionsCheckin} from './smart-transactions-checkin';
import {SmartTransactionsCheckoutLinks} from './smart-transactions-checkout-links';
import {SmartTransactionsCommunication} from './smart-transactions-communication';
import {SmartTransactionsIdent} from './smart-transactions-ident';
import {TaxRate} from './tax-rate';

export class SmartTransactionsDTO {
  /**
   * Merchant
   */
  merchant?: string;
  providerContract?: ProductInstanceUID;
  /**
   * Transaction reference
   */
  transactionRef?: string;
  /**
   * Merchant reference
   */
  merchantRef?: string;
  basket?: SmartTransactionsBasket;
  basketInfo?: SmartTransactionsBasketInfo;
  /**
   * Idents
   */
  idents?: Array<SmartTransactionsIdent>;
  taxAmount?: MoneyAmount;
  taxRate?: TaxRate;
  /**
   * Market
   */
  market?: string;
  /**
   * Cashier
   */
  cashier?: string;
  /**
   * Product
   */
  product?: string;
  deviceSource?: ProductInstanceUID;
  /**
   * Transaction id
   */
  transId?: number;
  contract?: ProductInstanceID;
  /**
   * Last visited page
   */
  lastVisitedPage?: string;
  customer?: PaymentCustomersProductModel;
  shippingAddress?: PaymentCustomersProductModel;
  container?: ProductInstanceUID;
  checkin?: SmartTransactionsCheckin;
  /**
   * Payment method
   */
  paymentMethod?: string;
  /**
   * Demo payment
   */
  isDemo?: boolean;
  /**
   * intent of transaction
   */
  intent?: string;
  checkoutLinks?: SmartTransactionsCheckoutLinks;
  deliveryOptions?: OneOfSmartTransactionsDeliveryOptionsModel;
  communications?: SmartTransactionsCommunication;
  applicationContext?: SmartTransactionsApplicationContext;
  paymentContext?: PaymentContext;
}
