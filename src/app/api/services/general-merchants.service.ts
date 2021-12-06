// noinspection JSUnusedGlobalSymbols,DuplicatedCode

import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {GeneralMerchantsList} from "../models/general-merchants-list";
import {GeneralMerchantsProductModel} from "../models/general-merchants-product-model";
import {GeneralMerchantsPublicDataModel} from "../models/general-merchants-public-data-model";
import {TokenService} from "../token-service";


/**
 * Contains all settings that are universally valid for the
 * merchant. One merchant can have multiple contracts, and multiple stores.
 */
@Injectable({
  providedIn: 'root',
})
export class GeneralMerchantsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation generalMerchantsGetAll
   */
  static readonly GeneralMerchantsGetAllPath = '/General/Merchants';

  /**
   * GET General/Merchants.
   *
   * Get a list of general merchants
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalMerchantsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalMerchantsGetAll$Response(params?: {

    /**
     * The maximum number of items to return
     */
    count?: number;

    /**
     * The position within the whole result set to start returning items (zero-based)
     */
    offset?: number;

    /**
     * List of fields to include in the result. Nested properties can be accessed with this notation: &#x60;prop1.prop2&#x60;.
     */
    fields?: string;

    /**
     * A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form &#x60;property:condition&#x60;. Property names can be nested like &#x60;property.property&#x60;.
     *
     * Example: &#x60;customer.name:Meier&#x60;
     *
     * A condition may contain:
     *  * &#x60;?&#x60; as wildcard for one character;
     *  * &#x60;*&#x60; as wildcard for any number of characters.
     *
     * You can also use value ranges in the form &#x60;[min TO max]&#x60;.
     *
     * Example: &#x60;customer.age:[30 TO 40]&#x60;
     *
     * You can combine expressions logically by &#x60;expr AND expr&#x60; and &#x60;{expr} OR {expr}&#x60;. You can also negate an expression using &#x60;NOT {expr}&#x60;. Parenthesis &#x60;(...)&#x60; can be used to control precedence.
     *
     * Example: &#x60;(NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])&#x60;
     */
    'q'?: string;

    /**
     * String with comma separated pairs of &#x60;field:order&#x60;.
     *
     * Options for order:
     *  * &#x60;asc&#x60; ascending;
     *  * &#x60;dsc&#x60; descending.
     */
    sort?: string;
  }): Observable<StrictHttpResponse<GeneralMerchantsList>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralMerchantsService.GeneralMerchantsGetAllPath, 'get');
    if (params) {
      rb.query('count', params.count, {});
      rb.query('offset', params.offset, {});
      rb.query('fields', params.fields, {});
      rb.query('q', params['q'], {});
      rb.query('sort', params.sort, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralMerchantsList>;
      })
    );
  }

  /**
   * GET General/Merchants.
   *
   * Get a list of general merchants
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalMerchantsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalMerchantsGetAll(params?: {

    /**
     * The maximum number of items to return
     */
    count?: number;

    /**
     * The position within the whole result set to start returning items (zero-based)
     */
    offset?: number;

    /**
     * List of fields to include in the result. Nested properties can be accessed with this notation: &#x60;prop1.prop2&#x60;.
     */
    fields?: string;

    /**
     * A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form &#x60;property:condition&#x60;. Property names can be nested like &#x60;property.property&#x60;.
     *
     * Example: &#x60;customer.name:Meier&#x60;
     *
     * A condition may contain:
     *  * &#x60;?&#x60; as wildcard for one character;
     *  * &#x60;*&#x60; as wildcard for any number of characters.
     *
     * You can also use value ranges in the form &#x60;[min TO max]&#x60;.
     *
     * Example: &#x60;customer.age:[30 TO 40]&#x60;
     *
     * You can combine expressions logically by &#x60;expr AND expr&#x60; and &#x60;{expr} OR {expr}&#x60;. You can also negate an expression using &#x60;NOT {expr}&#x60;. Parenthesis &#x60;(...)&#x60; can be used to control precedence.
     *
     * Example: &#x60;(NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])&#x60;
     */
    'q'?: string;

    /**
     * String with comma separated pairs of &#x60;field:order&#x60;.
     *
     * Options for order:
     *  * &#x60;asc&#x60; ascending;
     *  * &#x60;dsc&#x60; descending.
     */
    sort?: string;
  }): Observable<GeneralMerchantsList> {

    return this.generalMerchantsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralMerchantsList>) => r.body as GeneralMerchantsList)
    );
  }

  /**
   * Path part for operation generalMerchantsGetOne
   */
  static readonly GeneralMerchantsGetOnePath = '/General/Merchants/{generalMerchantId}';

  /**
   * GET General/Merchants/{generalMerchantId}.
   *
   * Get one general merchant for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalMerchantsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalMerchantsGetOne$Response(params: {

    /**
     * General merchant id
     */
    generalMerchantId: string;
  }): Observable<StrictHttpResponse<GeneralMerchantsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralMerchantsService.GeneralMerchantsGetOnePath, 'get');
    if (params) {
      rb.path('generalMerchantId', params.generalMerchantId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralMerchantsProductModel>;
      })
    );
  }

  /**
   * GET General/Merchants/{generalMerchantId}.
   *
   * Get one general merchant for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalMerchantsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalMerchantsGetOne(params: {

    /**
     * General merchant id
     */
    generalMerchantId: string;
  }): Observable<GeneralMerchantsProductModel> {

    return this.generalMerchantsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralMerchantsProductModel>) => r.body as GeneralMerchantsProductModel)
    );
  }

  /**
   * Path part for operation generalStoresGetPublicData
   */
  static readonly GeneralStoresGetPublicDataPath = '/General/Merchants/{generalMerchantId}/getPublicData/{generalContractId}';

  /**
   * POST General/Merchants/{generalMerchantId}/getPublicData/{generalContractId}.
   *
   * Get Public Data of a Merchant
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalStoresGetPublicData()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalStoresGetPublicData$Response(params: {

    /**
     * Merchant identifier
     */
    generalMerchantId: string;

    /**
     * Contract identifier
     */
    generalContractId: string;
  }): Observable<StrictHttpResponse<GeneralMerchantsPublicDataModel>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralMerchantsService.GeneralStoresGetPublicDataPath, 'post');
    if (params) {
      rb.path('generalMerchantId', params.generalMerchantId, {});
      rb.path('generalContractId', params.generalContractId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralMerchantsPublicDataModel>;
      })
    );
  }

  /**
   * POST General/Merchants/{generalMerchantId}/getPublicData/{generalContractId}.
   *
   * Get Public Data of a Merchant
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalStoresGetPublicData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalStoresGetPublicData(params: {

    /**
     * Merchant identifier
     */
    generalMerchantId: string;

    /**
     * Contract identifier
     */
    generalContractId: string;
  }): Observable<GeneralMerchantsPublicDataModel> {

    return this.generalStoresGetPublicData$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralMerchantsPublicDataModel>) => r.body as GeneralMerchantsPublicDataModel)
    );
  }

}
