// noinspection JSUnusedGlobalSymbols

import {PaymentContractsProductModel} from './payment-contracts-product-model';
import {SecupayTransactionSetShippingInformationDTO} from './secupay-transaction-set-shipping-information-dto';

export class SecupayTransactionCaptureDTO {
  contract?: PaymentContractsProductModel;
  shippingInformation?: SecupayTransactionSetShippingInformationDTO;
}
