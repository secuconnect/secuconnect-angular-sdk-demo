// noinspection JSUnusedGlobalSymbols

import {SmartTemplatesElementModel} from './smart-templates-element-model';

export class SmartTemplatesComponentModel {
  /**
   * Id of component item of the page
   */
  id?: number;
  /**
   * The name of component item
   */
  name?: string;
  /**
   * The component configuration
   */
  config?: any;
  /**
   * The component conditions to determine when this component should be shown
   */
  condition?: any;
  /**
   * The elements inside the page component
   */
  elements?: Array<SmartTemplatesElementModel>;
}
