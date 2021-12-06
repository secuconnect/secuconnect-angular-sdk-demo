// noinspection JSUnusedGlobalSymbols

import {Currency} from './currency';
import {MoneyAmount} from './money-amount';
import {PaymentCustomersProductModel} from './payment-customers-product-model';
import {SecupayBasketItem} from './secupay-basket-item';
import {SecupayRedirectUrl} from './secupay-redirect-url';
import {SecupayTransactionProductDTOExperience} from './secupay-transaction-product-dto-experience';
import {SecupayTransactionProductDTOOptData} from './secupay-transaction-product-dto-opt-data';
import {SecupayTransactionProductDTOSubscription} from './secupay-transaction-product-dto-subscription';

export class SecupayTransactionProductDTO {
  amount?: MoneyAmount;
  currency?: Currency;
  /**
   * The purpose of the payment. This is the later assignment of the payment is for example on the account statement of the buyer.
   */
  purpose?: string;
  /**
   * payment methods
   */
  paymentMethods?: Array<string>;
  /**
   * Specifying an order number. Depending on the contract setting, this must be unique for each payment.
   */
  orderId?: string;
  /**
   * A list of items that are being purchased.
   */
  basket?: Array<SecupayBasketItem>;
  /**
   * Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE). Standard value here is FALSE.
   */
  accrual?: boolean;
  /**
   * Specifies whether a pre-authorization (\"authorization\") or instant payment (\"sale\") is to be performed. Standard value here is \"sale\". The collection of the pre-authorized payment is made with the \"capture\" command.
   */
  paymentAction?: string;
  customer?: PaymentCustomersProductModel;
  redirectUrl?: SecupayRedirectUrl;
  /**
   * Contract id
   */
  contract?: string;
  /**
   * Container id
   */
  container?: string;
  optData?: SecupayTransactionProductDTOOptData;
  subscription?: SecupayTransactionProductDTOSubscription;
  /**
   * Demo
   */
  demo?: boolean;
  experience?: SecupayTransactionProductDTOExperience;
}
