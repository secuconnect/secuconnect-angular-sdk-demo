// noinspection JSUnusedGlobalSymbols

import {Address} from './address';
import {GeneralMerchantsLegalDetails} from './general-merchants-legal-details';
import {GeneralMerchantsUrls} from './general-merchants-urls';
import {PaymentInformation} from './payment-information';

export class GeneralMerchantsDTO {
  /**
   * Salutation {'Frau', 'Herr', 'Firma', 'Divers'}
   */
  salutation?: string;
  /**
   * Company name
   */
  companyname?: string;
  /**
   * First name
   */
  forename?: string;
  /**
   * Last name
   */
  surname?: string;
  /**
   * Date of birth
   */
  dob?: string;
  /**
   * Merchant homepage or shop URL
   */
  homepage?: string;
  /**
   * Merchant email address
   */
  email?: string;
  /**
   * Merchant phone number
   */
  phone?: string;
  address?: Address;
  paymentData?: PaymentInformation;
  /**
   * Legal details, like terms of use, privacy policy, or imprint
   */
  legalDetails?: Array<GeneralMerchantsLegalDetails>;
  /**
   * URLs
   */
  urls?: Array<GeneralMerchantsUrls>;
}
