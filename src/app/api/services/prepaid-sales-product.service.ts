/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

import {PrepaidSalesProductDTO} from '../models/prepaid-sales-product-dto';
import {PrepaidSalesProductModel} from '../models/prepaid-sales-product-model';


/**
 * Prepaid transactions
 */
@Injectable({
  providedIn: 'root',
})
export class PrepaidSalesProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation prepaidSalesAddSale
   */
  static readonly PrepaidSalesAddSalePath = '/Prepaid/Sales';

  /**
   * POST Prepaid/Sales.
   *
   * Create new prepaid transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prepaidSalesAddSale()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prepaidSalesAddSale$Response(params?: {

    /**
     * Prepaid transaction input properties
     */
    body?: PrepaidSalesProductDTO
  }): Observable<StrictHttpResponse<PrepaidSalesProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PrepaidSalesProductService.PrepaidSalesAddSalePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PrepaidSalesProductModel>;
      })
    );
  }

  /**
   * POST Prepaid/Sales.
   *
   * Create new prepaid transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prepaidSalesAddSale$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prepaidSalesAddSale(params?: {

    /**
     * Prepaid transaction input properties
     */
    body?: PrepaidSalesProductDTO
  }): Observable<PrepaidSalesProductModel> {

    return this.prepaidSalesAddSale$Response(params).pipe(
      map((r: StrictHttpResponse<PrepaidSalesProductModel>) => r.body as PrepaidSalesProductModel)
    );
  }

}
