// noinspection JSUnusedGlobalSymbols

import {AddressComponents} from './address-components';
import {AssignedBy} from './assigned-by';
import {BaseProductModel} from './base-product-model';
import {GeoAddressGeometry} from './geo-address-geometry';
import {InvitedBy} from './invited-by';
import {OpenHours} from './open-hours';
import {ProductInstanceUID} from './product-instance-uid';

export class GeneralStoresProductModel extends BaseProductModel {
  /**
   * ID in secupay Frontend
   */
  idOld?: string;
  merchant?: ProductInstanceUID;
  /**
   * Store name
   */
  storeName?: string;
  /**
   * Facebook ID
   */
  facebookId?: string;
  /**
   * Source
   */
  source?: string;
  /**
   * Key
   */
  key?: string;
  /**
   * Hash
   */
  hash?: string;
  /**
   * Address components
   */
  addressComponents?: Array<AddressComponents>;
  /**
   * Formatted address
   */
  addressFormatted?: string;
  /**
   * Formatted phone number
   */
  phoneNumberFormatted?: string;
  geometry?: GeoAddressGeometry;
  /**
   * Store name
   */
  name?: string;
  /**
   * Raw store name
   */
  nameRaw?: string;
  /**
   * Main photo
   */
  photoMain?: string;
  /**
   * All photos
   */
  photo?: Array<string>;
  /**
   * Main category
   */
  categoryMain?: string;
  /**
   * All categories
   */
  category?: Array<string>;
  /**
   * Google+ URL of the store
   */
  urlGoogleplus?: string;
  /**
   * Store website URL (e. g. a webpage of yours with the details of this store)
   */
  urlWebsite?: string;
  /**
   * Opening hours per weekday
   */
  openHours?: Array<OpenHours>;
  /**
   * Whether the store is just open
   */
  openNow?: boolean;
  /**
   * Opening time
   */
  openTime?: string;
  /**
   * UTC offset
   */
  utcOffset?: string;
  /**
   * Assigned by
   */
  assignedBy?: Array<AssignedBy>;
  /**
   * Invited by
   */
  invitedBy?: Array<InvitedBy>;
  /**
   * Whether the store has a WiFi beacon
   */
  hasBeacon?: boolean;
  /**
   * Whether the store is a secucard acceptance point
   */
  acceptancePoint?: boolean;
}
