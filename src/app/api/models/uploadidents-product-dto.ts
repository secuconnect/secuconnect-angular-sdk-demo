// noinspection JSUnusedGlobalSymbols


export class UploadidentsProductDTO {
  /**
   * Merchant ID
   */
  merchantId?: string;
  /**
   * Payment ID
   */
  paymentId?: string;
  /**
   * Contract ID
   */
  contractId?: string;
  /**
   * Api Key
   */
  apikey?: string;
  /**
   * Service issue id
   */
  serviceIssueId?: number;
  /**
   * List of documents ids
   */
  documentIds?: Array<string>;
}
