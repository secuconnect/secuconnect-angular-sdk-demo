// noinspection JSUnusedGlobalSymbols

import {BankAccountDescriptor} from './bank-account-descriptor';
import {BaseProductModel} from './base-product-model';
import {ParentModel} from './parent-model';
import {PaymentLinkOptions} from './payment-link-options';
import {ProductInstanceUID} from './product-instance-uid';

export class GeneralContractsProductModel extends BaseProductModel {
  parent?: ParentModel;
  merchant?: ProductInstanceUID;
  payInAdvanceAccount?: BankAccountDescriptor;
  paymentLinkOptions?: PaymentLinkOptions;
}
