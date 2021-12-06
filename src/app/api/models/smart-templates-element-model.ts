// noinspection JSUnusedGlobalSymbols

import {SmartTemplatesAccordionItemModel} from './smart-templates-accordion-item-model';

export class SmartTemplatesElementModel {
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
   * The accordion items to be shown in accordion element
   */
  accordionElements?: Array<SmartTemplatesAccordionItemModel>;
}
