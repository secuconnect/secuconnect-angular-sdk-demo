// noinspection JSUnusedGlobalSymbols

import {AddressComponents} from './address-components';
import {GeoAddressGeometry} from './geo-address-geometry';

export class GeoAddress {
  /**
   * Address type
   */
  type?: string;
  /**
   * Address components
   */
  addressComponents?: Array<AddressComponents>;
  /**
   * Address formatted
   */
  addressFormatted?: string;
  geometry?: GeoAddressGeometry;
}
