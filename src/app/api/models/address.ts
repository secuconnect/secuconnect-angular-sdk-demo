// noinspection JSUnusedGlobalSymbols


import {IsoCountryCode} from './iso-country-code';

/**
 * Postal address
 */
export class Address {
  /**
   * Type
   */
  type?: string;
  /**
   * Street name without house number
   */
  street?: string;
  /**
   * House number incl. supplement
   */
  streetNumber?: string;
  /**
   * City
   */
  city?: string;
  /**
   * Postal code / ZIP code
   */
  postalCode?: string;
  country?: IsoCountryCode;
  /**
   * Additional address line, like c/o, or an appartment number
   */
  additionalAddressData?: string;
}
