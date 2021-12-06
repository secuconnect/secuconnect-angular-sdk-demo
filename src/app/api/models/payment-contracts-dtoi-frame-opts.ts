// noinspection JSUnusedGlobalSymbols


export class PaymentContractsDTOIFrameOpts {
  /**
   * Display the basket items to the customer during the checkout
   */
  showBasket?: boolean;
  /**
   * Default headline of the checkout page
   */
  basketTitle?: string;
  /**
   * Default naming of the Submit-Button
   */
  submitButtonTitle?: string;
  /**
   * Logo base64-enconded
   */
  logoBase64?: string;
  /**
   * Cession ('formal', 'personal')
   */
  cession?: string;
}
