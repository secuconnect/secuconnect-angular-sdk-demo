// noinspection JSUnusedGlobalSymbols

import {GeoAddress} from './geo-address';

export class GeneralMerchantsUser {
  /**
   * Object of General Merchant user
   */
  object?: string;
  /**
   * ID of General Merchant user
   */
  id?: string;
  /**
   * Name of General Merchant user
   */
  name?: string;
  /**
   * Company name of General Merchant user
   */
  companyname?: string;
  /**
   * Address of General Merchant user
   */
  address?: Array<GeoAddress>;
}
