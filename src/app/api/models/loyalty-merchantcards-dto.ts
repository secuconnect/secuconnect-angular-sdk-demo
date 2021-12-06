// noinspection JSUnusedGlobalSymbols


export class LoyaltyMerchantcardsDTO {
  /**
   * General merchant id
   */
  merchant?: string;
  /**
   * Loyalty card id
   */
  card?: string;
  /**
   * Loyalty payment container id
   */
  paymentContainer?: string;
  /**
   * Created by general merchant or not
   */
  createdByMerchant?: boolean;
  /**
   * Used by general merchant or not
   */
  usedByMerchant?: boolean;
}
