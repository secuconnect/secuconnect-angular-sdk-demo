// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {GeneralMerchantsLegalDetails} from './general-merchants-legal-details';
import {GeneralMerchantsPublicDataCompany} from './general-merchants-public-data-company';
import {GeneralMerchantsUrls} from './general-merchants-urls';

export class GeneralMerchantsPublicDataModel extends BaseProductModel {
  /**
   * Legal details like terms of use, privacy policy, or imprint
   */
  legalDetails?: Array<GeneralMerchantsLegalDetails>;
  company?: GeneralMerchantsPublicDataCompany;
  /**
   * URLs
   */
  merchantUrls?: Array<GeneralMerchantsUrls>;
}
