// noinspection JSUnusedGlobalSymbols

import {Address} from './address';
import {OpenHours} from './open-hours';

export class GeneralStoresDTO {
  /**
   * Name
   */
  name?: string;
  /**
   * Merchant
   */
  merchant?: string;
  address?: Address;
  /**
   * New facebook ID
   */
  facebookId?: string;
  /**
   * New phone number
   */
  phone?: string;
  /**
   * New URL to general store website
   */
  urlWebsite?: string;
  /**
   * New main photo
   */
  photoMain?: string;
  /**
   * New photos
   */
  photo?: Array<string>;
  /**
   * Opening hours per weekday
   */
  openHours?: Array<OpenHours>;
}
