// noinspection JSUnusedGlobalSymbols

import {Address} from './address';
import {IsoCountryCode} from './iso-country-code';

export class Contact {
  /**
   * First name
   */
  forename?: string;
  /**
   * Last name
   */
  surname?: string;
  /**
   * Company name
   */
  companyname?: string;
  /**
   * Salutation
   */
  salutation?: string;
  /**
   * Gender
   */
  gender?: string;
  /**
   * Title or academic degree
   */
  title?: string;
  /**
   * E-mail address
   */
  email?: string;
  /**
   * Landline number
   */
  phone?: string;
  /**
   * Mobile phone number
   */
  mobile?: string;
  /**
   * Fax number
   */
  fax?: string;
  /**
   * Date of birth
   */
  dob?: string;
  /**
   * The document ID of an user picture; s. Document service
   */
  picture?: string;
  /**
   * URL to company website
   */
  urlWebsite?: string;
  /**
   * Birthplace
   */
  birthplace?: string;
  nationality?: IsoCountryCode;
  address?: Address;
}
