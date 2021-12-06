// noinspection JSUnusedGlobalSymbols

import {BankAccountDescriptor} from './bank-account-descriptor';

export class LoyaltyCustomersPaymentContainerModel {
  /**
   * LoyaltyCustomersPaymentContainerModel
   */
  object?: string;
  /**
   * LoyaltyCustomersPaymentContainerModel
   */
  id?: string;
  /**
   * LoyaltyCustomersPaymentContainerModel
   */
  type?: string;
  paymentInformation?: BankAccountDescriptor;
  /**
   * Last Usage date
   */
  lastUsage?: string;
}
