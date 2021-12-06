// noinspection JSUnusedGlobalSymbols


export class GeneralMerchantsLegalDetails {
  /**
   * URL
   */
  url?: string;
  /**
   * Document type: 'imprint', 'revocation' (cancellation policy), 'terms' (terms of use), 'policy' (privacy policy), or 'logo'
   */
  type?: string;
  /**
   * MIME type
   */
  contentType?: string;
  /**
   * Language code {'de', 'en', ...}
   */
  language?: string;
}
