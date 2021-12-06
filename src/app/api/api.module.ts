/* tslint:disable */
/* eslint-disable */
import {NgModule, ModuleWithProviders, SkipSelf, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConfiguration, ApiConfigurationParams} from './api-configuration';

import {DocumentUploadsService} from './services/document-uploads.service';
import {GeneralContractsService} from './services/general-contracts.service';
import {GeneralMerchantsService} from './services/general-merchants.service';
import {GeneralStoresService} from './services/general-stores.service';
import {LoyaltyCardgroupsService} from './services/loyalty-cardgroups.service';
import {LoyaltyCardsService} from './services/loyalty-cards.service';
import {LoyaltyCustomersService} from './services/loyalty-customers.service';
import {LoyaltyMerchantcardsService} from './services/loyalty-merchantcards.service';
import {LoyaltyTransactionsService} from './services/loyalty-transactions.service';
import {PaymentContainersService} from './services/payment-containers.service';
import {PaymentContractsService} from './services/payment-contracts.service';
import {PaymentCustomersService} from './services/payment-customers.service';
import {PaymentPlansService} from './services/payment-plans.service';
import {PaymentSecupayCreditcardsService} from './services/payment-secupay-creditcards.service';
import {PaymentSecupayDebitsService} from './services/payment-secupay-debits.service';
import {PaymentSecupayInvoicesService} from './services/payment-secupay-invoices.service';
import {PaymentSecupayPrepaysService} from './services/payment-secupay-prepays.service';
import {PaymentSecupaySofortService} from './services/payment-secupay-sofort.service';
import {PaymentSecupayPayoutService} from './services/payment-secupay-payout.service';
import {PaymentSubscriptionsService} from './services/payment-subscriptions.service';
import {PaymentTransactionsService} from './services/payment-transactions.service';
import {PrepaidContractsProductService} from './services/prepaid-contracts-product.service';
import {PrepaidItemsService} from './services/prepaid-items.service';
import {PrepaidSalesProductService} from './services/prepaid-sales-product.service';
// import { ServicesIdentrequestsService } from './services/services-identrequests.service';
// import { ServicesIdentresultsService } from './services/services-identresults.service';
import {ServicesUploadidentsProductService} from './services/services-uploadidents-product.service';
import {SmartDevicesService} from './services/smart-devices.service';
import {SmartRoutingsService} from './services/smart-routings.service';
import {SmartTemplatesService} from './services/smart-templates.service';
import {SmartTransactionsService} from './services/smart-transactions.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DocumentUploadsService,
    GeneralContractsService,
    GeneralMerchantsService,
    GeneralStoresService,
    LoyaltyCardgroupsService,
    LoyaltyCardsService,
    LoyaltyCustomersService,
    LoyaltyMerchantcardsService,
    LoyaltyTransactionsService,
    PaymentContainersService,
    PaymentContractsService,
    PaymentCustomersService,
    PaymentPlansService,
    PaymentSecupayCreditcardsService,
    PaymentSecupayDebitsService,
    PaymentSecupayInvoicesService,
    PaymentSecupayPrepaysService,
    PaymentSecupaySofortService,
    PaymentSecupayPayoutService,
    PaymentSubscriptionsService,
    PaymentTransactionsService,
    PrepaidContractsProductService,
    PrepaidItemsService,
    PrepaidSalesProductService,
    // ServicesIdentrequestsService,
    // ServicesIdentresultsService,
    ServicesUploadidentsProductService,
    SmartDevicesService,
    SmartRoutingsService,
    SmartTemplatesService,
    SmartTransactionsService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
