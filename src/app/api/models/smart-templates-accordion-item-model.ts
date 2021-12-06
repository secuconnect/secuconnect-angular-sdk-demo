// noinspection JSUnusedGlobalSymbols

import {SmartTemplatesElementModel} from './smart-templates-element-model';

export class SmartTemplatesAccordionItemModel {
  /**
   * Id of element item of the component
   */
  id?: number;
  /**
   * The element type
   */
  type?: string;
  /**
   * The element configuration
   */
  config?: any;
  /**
   * The element conditions to determine when this element should be shown
   */
  condition?: any;
  /**
   * The child elements to be shown inside an accordion item
   */
  elements?: Array<SmartTemplatesElementModel>;
}
