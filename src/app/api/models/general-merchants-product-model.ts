// noinspection JSUnusedGlobalSymbols

import {AssignedBy} from './assigned-by';
import {BaseProductModel} from './base-product-model';
import {GeneralMerchantsLegalDetails} from './general-merchants-legal-details';
import {GeneralMerchantsUrls} from './general-merchants-urls';
import {GeneralMerchantsUser} from './general-merchants-user';
import {InvitedBy} from './invited-by';
import {ParentModel} from './parent-model';

export class GeneralMerchantsProductModel extends BaseProductModel {

  public static map(response: any): GeneralMerchantsProductModel {
    return {
      type: response["type"],
      storeName: response['store_name'],
    }
  };

  /**
   * ID in secupay Frontend
   */
  readonly idOld?: number;
  /**
   * User type ID - unverified shop (1); internet shop (11); kaufmännischer Netzbetrieb (KNB, 45); secucard merchant (46); App Center user (63), checkout provider (64)
   */
  type?: string;
  user?: GeneralMerchantsUser;
  parent?: ParentModel;
  /**
   * Assigned by
   */
  assignedBy?: Array<AssignedBy>;
  /**
   * Invited by
   */
  invitedBy?: Array<InvitedBy>;
  /**
   * Legal details like terms of use, privacy policy, or imprint
   */
  legalDetails?: Array<GeneralMerchantsLegalDetails>;
  /**
   * URLs
   */
  urls?: Array<GeneralMerchantsUrls>;
  /**
   * Store name
   */
  storeName?: string;
}
