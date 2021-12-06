// noinspection JSUnusedGlobalSymbols

import {BankAccountDescriptor} from './bank-account-descriptor';

export class PaymentInstructions extends BankAccountDescriptor {
  /**
   * Url to generated GiroCode
   */
  girocodeUrl?: string;
}
