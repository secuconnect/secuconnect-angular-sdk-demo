// noinspection JSUnusedGlobalSymbols


export class SecupayRedirectUrl {
  /**
   * The url of the payment checkout iframe
   */
  iframeUrl?: string;
  /**
   * After successfully entering the cash data of the payer is returned to this page.
   */
  urlSuccess?: string;
  /**
   * After canceling or on errors the payer will be redirected to this page and can select there an another payment method.
   */
  urlFailure?: string;
  /**
   * The secupay system will be send status change notifications to this URL.
   */
  urlPush?: string;
}
