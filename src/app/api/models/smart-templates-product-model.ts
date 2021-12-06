// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {IsoDateTime} from './iso-date-time';
import {SmartTemplatesComponentModel} from './smart-templates-component-model';

export class SmartTemplatesProductModel extends BaseProductModel {
  created?: IsoDateTime;
  updated?: IsoDateTime;
  /**
   * Name of smart template
   */
  name?: string;
  /**
   * Description of smart template
   */
  description?: string;
  /**
   * Default Language configured for this template
   */
  defaultLanguage?: string;
  /**
   * Header definition of smart template
   */
  header?: Array<SmartTemplatesComponentModel>;
  /**
   * Footer definition of smart template
   */
  footer?: Array<SmartTemplatesComponentModel>;
  /**
   * Definition of different pages in smart template
   */
  pages?: Array<SmartTemplatesComponentModel>;
}
