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

import {GeneralStoresDTO} from '../models/general-stores-dto';
import {GeneralStoresDTOReason} from '../models/general-stores-dto-reason';
import {GeneralStoresDTOType} from '../models/general-stores-dto-type';
import {GeneralStoresList} from '../models/general-stores-list';
import {GeneralStoresProductModel} from '../models/general-stores-product-model';
import {ResultBoolean} from '../models/result-boolean';


/**
 * The stores of a merchant. Smart ZVT devices are assigned to
 * stores. And Click & Collect arrangments are for specific stores.
 */
@Injectable({
  providedIn: 'root',
})
export class GeneralStoresService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation generalStoresGetAll
   */
  static readonly GeneralStoresGetAllPath = '/General/Stores';

  /**
   * GET General/Stores.
   *
   * Get a list of general stores
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalStoresGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalStoresGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<GeneralStoresList>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralStoresService.GeneralStoresGetAllPath, 'get');
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
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralStoresList>;
      })
    );
  }

  /**
   * GET General/Stores.
   *
   * Get a list of general stores
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalStoresGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalStoresGetAll(params?: {

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
  }): Observable<GeneralStoresList> {

    return this.generalStoresGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralStoresList>) => r.body as GeneralStoresList)
    );
  }

  /**
   * Path part for operation generalStoresAddStore
   */
  static readonly GeneralStoresAddStorePath = '/General/Stores';

  /**
   * POST General/Stores.
   *
   * Create general store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalStoresAddStore()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalStoresAddStore$Response(params?: {

    /**
     * General store properties
     */
    body?: GeneralStoresDTO
  }): Observable<StrictHttpResponse<GeneralStoresProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralStoresService.GeneralStoresAddStorePath, 'post');
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
        return r as StrictHttpResponse<GeneralStoresProductModel>;
      })
    );
  }

  /**
   * POST General/Stores.
   *
   * Create general store
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalStoresAddStore$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalStoresAddStore(params?: {

    /**
     * General store properties
     */
    body?: GeneralStoresDTO
  }): Observable<GeneralStoresProductModel> {

    return this.generalStoresAddStore$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralStoresProductModel>) => r.body as GeneralStoresProductModel)
    );
  }

  /**
   * Path part for operation generalStoresGetOne
   */
  static readonly GeneralStoresGetOnePath = '/General/Stores/{generalStoreId}';

  /**
   * GET General/Stores/{generalStoreId}.
   *
   * Get one general store for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalStoresGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalStoresGetOne$Response(params: {

    /**
     * General store id
     */
    generalStoreId: string;
  }): Observable<StrictHttpResponse<GeneralStoresProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralStoresService.GeneralStoresGetOnePath, 'get');
    if (params) {
      rb.path('generalStoreId', params.generalStoreId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralStoresProductModel>;
      })
    );
  }

  /**
   * GET General/Stores/{generalStoreId}.
   *
   * Get one general store for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalStoresGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalStoresGetOne(params: {

    /**
     * General store id
     */
    generalStoreId: string;
  }): Observable<GeneralStoresProductModel> {

    return this.generalStoresGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralStoresProductModel>) => r.body as GeneralStoresProductModel)
    );
  }

  /**
   * Path part for operation generalStoresUpdateStore
   */
  static readonly GeneralStoresUpdateStorePath = '/General/Stores/{generalStoreId}';

  /**
   * PUT General/Stores/{generalStoreId}.
   *
   * Update general store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalStoresUpdateStore()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalStoresUpdateStore$Response(params: {

    /**
     * General store id
     */
    generalStoreId: string;

    /**
     * General store properties
     */
    body?: GeneralStoresDTO
  }): Observable<StrictHttpResponse<GeneralStoresProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralStoresService.GeneralStoresUpdateStorePath, 'put');
    if (params) {
      rb.path('generalStoreId', params.generalStoreId, {});
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
        return r as StrictHttpResponse<GeneralStoresProductModel>;
      })
    );
  }

  /**
   * PUT General/Stores/{generalStoreId}.
   *
   * Update general store
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalStoresUpdateStore$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalStoresUpdateStore(params: {

    /**
     * General store id
     */
    generalStoreId: string;

    /**
     * General store properties
     */
    body?: GeneralStoresDTO
  }): Observable<GeneralStoresProductModel> {

    return this.generalStoresUpdateStore$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralStoresProductModel>) => r.body as GeneralStoresProductModel)
    );
  }

  /**
   * Path part for operation generalStoresCheckIn
   */
  static readonly GeneralStoresCheckInPath = '/General/Stores/{generalStoreId}/checkin';

  /**
   * POST General/Stores/{generalStoreId}/checkin.
   *
   * Check in
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalStoresCheckIn()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalStoresCheckIn$Response(params: {

    /**
     * General store id
     */
    generalStoreId: string;

    /**
     * General store properties
     */
    body?: GeneralStoresDTOType
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralStoresService.GeneralStoresCheckInPath, 'post');
    if (params) {
      rb.path('generalStoreId', params.generalStoreId, {});
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
        return r as StrictHttpResponse<ResultBoolean>;
      })
    );
  }

  /**
   * POST General/Stores/{generalStoreId}/checkin.
   *
   * Check in
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalStoresCheckIn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalStoresCheckIn(params: {

    /**
     * General store id
     */
    generalStoreId: string;

    /**
     * General store properties
     */
    body?: GeneralStoresDTOType
  }): Observable<ResultBoolean> {

    return this.generalStoresCheckIn$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

  /**
   * Path part for operation generalStoresSetDefault
   */
  static readonly GeneralStoresSetDefaultPath = '/General/Stores/{generalStoreId}/setDefault';

  /**
   * POST General/Stores/{generalStoreId}/setDefault.
   *
   * Set default flag on general store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalStoresSetDefault()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalStoresSetDefault$Response(params: {

    /**
     * General store id
     */
    generalStoreId: string;

    /**
     * Reason
     */
    body?: GeneralStoresDTOReason
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralStoresService.GeneralStoresSetDefaultPath, 'post');
    if (params) {
      rb.path('generalStoreId', params.generalStoreId, {});
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
        return r as StrictHttpResponse<ResultBoolean>;
      })
    );
  }

  /**
   * POST General/Stores/{generalStoreId}/setDefault.
   *
   * Set default flag on general store
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalStoresSetDefault$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalStoresSetDefault(params: {

    /**
     * General store id
     */
    generalStoreId: string;

    /**
     * Reason
     */
    body?: GeneralStoresDTOReason
  }): Observable<ResultBoolean> {

    return this.generalStoresSetDefault$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

}
