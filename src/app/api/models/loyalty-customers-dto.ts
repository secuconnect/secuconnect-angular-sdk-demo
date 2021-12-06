// noinspection JSUnusedGlobalSymbols

import {Contact} from './contact';

export class LoyaltyCustomersDTO {
  /**
   * merchant
   */
  merchant?: string;
  merchantContact?: Contact;
  /**
   * Age
   */
  age?: number;
  /**
   * Number of days until birthday
   */
  daysUntilBirthday?: number;
  /**
   * Customer number
   */
  customernumber?: string;
  /**
   * note
   */
  note?: string;
  /**
   * Consent for communication
   */
  additionalData?: any;
}
