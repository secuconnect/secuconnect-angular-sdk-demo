// noinspection JSUnusedGlobalSymbols

import {BankAccountDescriptor} from './bank-account-descriptor';
import {Currency} from './currency';
import {MoneyAmount} from './money-amount';

export class PaymentTransactionsInstructions {
  /**
   * Language
   */
  lang?: string;
  amount?: MoneyAmount;
  currency?: Currency;
  payment?: BankAccountDescriptor;
}
