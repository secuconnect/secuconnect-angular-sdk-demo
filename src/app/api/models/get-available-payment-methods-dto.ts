// noinspection JSUnusedGlobalSymbols

import {Currency} from './currency';

export class GetAvailablePaymentMethodsDTO {
  currency?: Currency;
  /**
   * Demo mode. Such transactions are not actually processed.
   */
  isDemo?: boolean;
}
