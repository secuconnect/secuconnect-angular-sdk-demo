// noinspection JSUnusedGlobalSymbols

import {SmartTransactionsTimeSlot} from './smart-transactions-time-slot';

export class SmartTransactionsCollectionModel {
  /**
   * Type of delivery option
   */
  type?: string;
  scheduledSlot?: SmartTransactionsTimeSlot;
  /**
   * Store ID
   */
  storeId?: string;
  /**
   * Delivered at
   */
  deliveredAt?: string;
  /**
   * confirmation code to pickup the collection
   */
  code?: string;
}
