// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {LoyaltyCardgroupsProductModel} from './loyalty-cardgroups-product-model';
import {LoyaltyCardsProductModel} from './loyalty-cards-product-model';
import {LoyaltyCustomersProductModel} from './loyalty-customers-product-model';
import {LoyaltyMerchantcardsDTOPaymentContainer} from './loyalty-merchantcards-dto-payment-container';
import {ProductInstanceUID} from './product-instance-uid';

/**
 * Loyalty merchant card
 */
export class LoyaltyMerchantcardsProductModel extends BaseProductModel {
  card?: LoyaltyCardsProductModel;
  merchant?: ProductInstanceUID;
  createdForMerchant?: ProductInstanceUID;
  createdForStore?: ProductInstanceUID;
  customer?: LoyaltyCustomersProductModel;
  cardgroup?: LoyaltyCardgroupsProductModel;
  paymentContainer?: LoyaltyMerchantcardsDTOPaymentContainer;
  /**
   * Loyalty merchant card balance
   */
  balance?: number;
  /**
   * Loyalty merchant card points
   */
  points?: number;
  /**
   * Loyalty merchant card bonus balance
   */
  bonusBalance?: number;
  /**
   * Loyalty merchant card cash balance
   */
  cashBalance?: number;
  /**
   * Loyalty merchant card stock status
   */
  stockStatus?: string;
  /**
   * Loyalty merchant card lock status
   */
  lockStatus?: string;
  /**
   * Loyalty merchant card last usage
   */
  lastUsage?: string;
  /**
   * Loyalty merchant card last charge
   */
  lastCharge?: string;
  /**
   * Information whether loyalty merchant card is base card
   */
  isBaseCard?: boolean;
  /**
   * Loyalty merchant card passcode
   */
  passcode?: number;
}
