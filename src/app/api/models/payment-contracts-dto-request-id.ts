// noinspection JSUnusedGlobalSymbols

import {Contact} from './contact';
import {PaymentContractsDTOIFrameOpts} from './payment-contracts-dtoi-frame-opts';
import {PaymentInformation} from './payment-information';

export class PaymentContractsDTORequestId {
  contact?: Contact;
  /**
   * Name of the project (must be unique)
   */
  project?: string;
  payoutAccount?: PaymentInformation;
  iframeOpts?: PaymentContractsDTOIFrameOpts;
  /**
   * Pay in account
   */
  payinAccount?: boolean;
  /**
   * Create first store
   */
  createFirstStore?: boolean;
  /**
   * Store name
   */
  storeName?: string;
  /**
   * Payout purpose
   */
  payoutPurpose?: string;
}
