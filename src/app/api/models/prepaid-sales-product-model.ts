// noinspection JSUnusedGlobalSymbols

import {BaseProductModel} from './base-product-model';
import {Currency} from './currency';
import {IsoDateTime} from './iso-date-time';
import {ItemGroup} from './item-group';
import {MoneyAmount} from './money-amount';
import {PrepaidSalesItem} from './prepaid-sales-item';
import {PrepaidSalesSmartDevice} from './prepaid-sales-smart-device';
import {ProductInstanceUID} from './product-instance-uid';
import {Store} from './store';

export class PrepaidSalesProductModel extends BaseProductModel {
  created?: IsoDateTime;
  /**
   * Status
   */
  status?: string;
  stock?: ProductInstanceUID;
  item?: PrepaidSalesItem;
  itemgroup?: ItemGroup;
  smartDevice?: PrepaidSalesSmartDevice;
  merchant?: ProductInstanceUID;
  store?: Store;
  contract?: ProductInstanceUID;
  /**
   * Demo
   */
  demo?: boolean;
  /**
   * Description
   */
  description?: string;
  amount?: MoneyAmount;
  currency?: Currency;
  /**
   * Commission
   */
  commission?: number;
  /**
   * Commission currency
   */
  commissionCurrency?: string;
  /**
   * Code
   */
  code?: string;
  /**
   * Serial
   */
  serial?: string;
  /**
   * Card number
   */
  cardnumber?: string;
  /**
   * Expire date
   */
  expireDate?: string;
  /**
   * Provider delivery number
   */
  providerDeliveryNumber?: string;
  /**
   * Receipt header
   */
  receiptHeader?: string;
  /**
   * Receipt customer
   */
  receiptCustomer?: string;
  /**
   * Receipt zvt
   */
  receiptZvt?: string;
  /**
   * Receipt dealer
   */
  receiptDealer?: string;
  /**
   * Vtc tid
   */
  vtcTid?: string;
}
