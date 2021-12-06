// noinspection JSUnusedGlobalSymbols


/**
 * E-goods product category, e. g. all cards for a vendor
 */
export class ItemGroup {
  /**
   * Object type
   */
  object?: string;
  /**
   * Object ID
   */
  id?: string;
  /**
   * Short name, e. g. the vendor name
   */
  description?: string;
  /**
   * Document upload ID of vendor
   */
  logo?: string;
  /**
   * Whether the category is available
   */
  enabled?: boolean;
}
