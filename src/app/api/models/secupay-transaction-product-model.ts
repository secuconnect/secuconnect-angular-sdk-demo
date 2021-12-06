// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {Currency} from './currency';
import {MoneyAmount} from './money-amount';
import {PaymentContainerMandate} from './payment-container-mandate';
import {PaymentContainersProductModel} from './payment-containers-product-model';
import {PaymentCustomersProductModel} from './payment-customers-product-model';
import {PaymentInformation} from './payment-information';
import {SecupayBasketItem} from './secupay-basket-item';
import {SecupayRedirectUrl} from './secupay-redirect-url';
import {SecupaySubTransactionProductModel} from './secupay-sub-transaction-product-model';
import {SecupayTransactionProductDTOSubscription} from './secupay-transaction-product-dto-subscription';
import {
  SecupayTransactionProductModelUsedPaymentInstrument
} from './secupay-transaction-product-model-used-payment-instrument';

export class SecupayTransactionProductModel extends BaseProductModel {
  /**
   * Transaction identifier
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
   * Payment ID
   */
  paymentId?: string;
  /**
   * A list of items that are being purchased.
   */
  basket?: Array<SecupayBasketItem>;
  /**
   * Transaction status (number)
   */
  transactionStatus?: string;
  /**
   * Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE). Standard value here is FALSE.
   */
  accrual?: boolean;
  /**
   * Specifies whether a pre-authorization (\"authorization\") or instant payment ( \"sale\") is to be performed. Standard value here is \"sale\". The collection of the pre-authorized payment is made with the \"capture\" command.
   */
  paymentAction?: string;
  /**
   * The purpose the payer needs to use for his transfer
   */
  transferPurpose?: string;
  transferAccount?: PaymentInformation;
  customer?: PaymentCustomersProductModel;
  usedPaymentInstrument?: SecupayTransactionProductModelUsedPaymentInstrument;
  redirectUrl?: SecupayRedirectUrl;
  subscription?: SecupayTransactionProductDTOSubscription;
  /**
   * The url of the payment checkout iframe
   */
  iframeUrl?: string;
  container?: PaymentContainersProductModel;
  /**
   * A list of sub transactions (for mixed basket)
   */
  subTransactions?: Array<SecupaySubTransactionProductModel>;
  mandate?: PaymentContainerMandate;
}
