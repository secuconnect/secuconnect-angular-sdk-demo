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

import {SmartRoutingPriority} from '../models/smart-routing-priority';
import {SmartRoutingsDTO} from '../models/smart-routings-dto';
import {SmartRoutingsList} from '../models/smart-routings-list';
import {SmartRoutingsProductModel} from '../models/smart-routings-product-model';


/**
 * A routing defines a connection between two Smart ZVT
 * eligible devices (s. Smart Devices). For instance you can flexibly connect
 * electronic cash registers (ECR) with POS payment terminals. Our server can use
 * the same link to trigger ZVT functions for a different purpose, for instance to
 * integrate e-commerce with your point of sale (POS), which is commonly known as
 * cross-channel, omni-channel, or multi-channel.
 */
@Injectable({
  providedIn: 'root',
})
export class SmartRoutingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation smartRoutingsGetAll
   */
  static readonly SmartRoutingsGetAllPath = '/Smart/Routings';

  /**
   * GET Smart/Routings.
   *
   * Get a list of smart routings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartRoutingsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartRoutingsGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<SmartRoutingsList>> {

    const rb = new RequestBuilder(this.rootUrl, SmartRoutingsService.SmartRoutingsGetAllPath, 'get');
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
        return r as StrictHttpResponse<SmartRoutingsList>;
      })
    );
  }

  /**
   * GET Smart/Routings.
   *
   * Get a list of smart routings
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartRoutingsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartRoutingsGetAll(params?: {

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
  }): Observable<SmartRoutingsList> {

    return this.smartRoutingsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<SmartRoutingsList>) => r.body as SmartRoutingsList)
    );
  }

  /**
   * Path part for operation smartRoutingsAddRouting
   */
  static readonly SmartRoutingsAddRoutingPath = '/Smart/Routings';

  /**
   * POST Smart/Routings.
   *
   * Create new smart routing
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartRoutingsAddRouting()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartRoutingsAddRouting$Response(params?: {

    /**
     * Smart routing properties
     */
    body?: SmartRoutingsDTO
  }): Observable<StrictHttpResponse<SmartRoutingsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartRoutingsService.SmartRoutingsAddRoutingPath, 'post');
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
        return r as StrictHttpResponse<SmartRoutingsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Routings.
   *
   * Create new smart routing
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartRoutingsAddRouting$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartRoutingsAddRouting(params?: {

    /**
     * Smart routing properties
     */
    body?: SmartRoutingsDTO
  }): Observable<SmartRoutingsProductModel> {

    return this.smartRoutingsAddRouting$Response(params).pipe(
      map((r: StrictHttpResponse<SmartRoutingsProductModel>) => r.body as SmartRoutingsProductModel)
    );
  }

  /**
   * Path part for operation smartRoutingsGetOne
   */
  static readonly SmartRoutingsGetOnePath = '/Smart/Routings/{smartRoutingId}';

  /**
   * GET Smart/Routings/{smartRoutingId}.
   *
   * Get one smart routing for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartRoutingsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartRoutingsGetOne$Response(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;
  }): Observable<StrictHttpResponse<SmartRoutingsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartRoutingsService.SmartRoutingsGetOnePath, 'get');
    if (params) {
      rb.path('smartRoutingId', params.smartRoutingId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartRoutingsProductModel>;
      })
    );
  }

  /**
   * GET Smart/Routings/{smartRoutingId}.
   *
   * Get one smart routing for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartRoutingsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartRoutingsGetOne(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;
  }): Observable<SmartRoutingsProductModel> {

    return this.smartRoutingsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<SmartRoutingsProductModel>) => r.body as SmartRoutingsProductModel)
    );
  }

  /**
   * Path part for operation smartRoutingsUpdateRouting
   */
  static readonly SmartRoutingsUpdateRoutingPath = '/Smart/Routings/{smartRoutingId}';

  /**
   * PUT Smart/Routings/{smartRoutingId}.
   *
   * Update specific smart routing
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartRoutingsUpdateRouting()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartRoutingsUpdateRouting$Response(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;

    /**
     * Smart routing properties
     */
    body?: SmartRoutingsDTO
  }): Observable<StrictHttpResponse<SmartRoutingsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartRoutingsService.SmartRoutingsUpdateRoutingPath, 'put');
    if (params) {
      rb.path('smartRoutingId', params.smartRoutingId, {});
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
        return r as StrictHttpResponse<SmartRoutingsProductModel>;
      })
    );
  }

  /**
   * PUT Smart/Routings/{smartRoutingId}.
   *
   * Update specific smart routing
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartRoutingsUpdateRouting$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartRoutingsUpdateRouting(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;

    /**
     * Smart routing properties
     */
    body?: SmartRoutingsDTO
  }): Observable<SmartRoutingsProductModel> {

    return this.smartRoutingsUpdateRouting$Response(params).pipe(
      map((r: StrictHttpResponse<SmartRoutingsProductModel>) => r.body as SmartRoutingsProductModel)
    );
  }

  /**
   * Path part for operation smartRoutingsRemoveRouting
   */
  static readonly SmartRoutingsRemoveRoutingPath = '/Smart/Routings/{smartRoutingId}';

  /**
   * DELETE Smart/Routings/{smartRoutingId}.
   *
   * Remove specific smart roting
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartRoutingsRemoveRouting()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartRoutingsRemoveRouting$Response(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;
  }): Observable<StrictHttpResponse<SmartRoutingsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartRoutingsService.SmartRoutingsRemoveRoutingPath, 'delete');
    if (params) {
      rb.path('smartRoutingId', params.smartRoutingId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartRoutingsProductModel>;
      })
    );
  }

  /**
   * DELETE Smart/Routings/{smartRoutingId}.
   *
   * Remove specific smart roting
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartRoutingsRemoveRouting$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartRoutingsRemoveRouting(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;
  }): Observable<SmartRoutingsProductModel> {

    return this.smartRoutingsRemoveRouting$Response(params).pipe(
      map((r: StrictHttpResponse<SmartRoutingsProductModel>) => r.body as SmartRoutingsProductModel)
    );
  }

  /**
   * Path part for operation smartRoutingsAssignDeviceToRouting
   */
  static readonly SmartRoutingsAssignDeviceToRoutingPath = '/Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}';

  /**
   * POST Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}.
   *
   * Assign the specific smart device to the specific smart routing
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartRoutingsAssignDeviceToRouting()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartRoutingsAssignDeviceToRouting$Response(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;

    /**
     * Smart device id
     */
    smartDeviceId: string;

    /**
     * Smart routing assignment properties
     */
    body?: SmartRoutingPriority
  }): Observable<StrictHttpResponse<SmartRoutingsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartRoutingsService.SmartRoutingsAssignDeviceToRoutingPath, 'post');
    if (params) {
      rb.path('smartRoutingId', params.smartRoutingId, {});
      rb.path('smartDeviceId', params.smartDeviceId, {});
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
        return r as StrictHttpResponse<SmartRoutingsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}.
   *
   * Assign the specific smart device to the specific smart routing
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartRoutingsAssignDeviceToRouting$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartRoutingsAssignDeviceToRouting(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;

    /**
     * Smart device id
     */
    smartDeviceId: string;

    /**
     * Smart routing assignment properties
     */
    body?: SmartRoutingPriority
  }): Observable<SmartRoutingsProductModel> {

    return this.smartRoutingsAssignDeviceToRouting$Response(params).pipe(
      map((r: StrictHttpResponse<SmartRoutingsProductModel>) => r.body as SmartRoutingsProductModel)
    );
  }

  /**
   * Path part for operation smartRoutingsRemoveSmartRoutingAssignment
   */
  static readonly SmartRoutingsRemoveSmartRoutingAssignmentPath = '/Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}';

  /**
   * DELETE Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}.
   *
   * Remove smart routing assignment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartRoutingsRemoveSmartRoutingAssignment()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartRoutingsRemoveSmartRoutingAssignment$Response(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;

    /**
     * Smart device id
     */
    smartDeviceId: string;
  }): Observable<StrictHttpResponse<SmartRoutingsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartRoutingsService.SmartRoutingsRemoveSmartRoutingAssignmentPath, 'delete');
    if (params) {
      rb.path('smartRoutingId', params.smartRoutingId, {});
      rb.path('smartDeviceId', params.smartDeviceId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartRoutingsProductModel>;
      })
    );
  }

  /**
   * DELETE Smart/Routings/{smartRoutingId}/assign/{smartDeviceId}.
   *
   * Remove smart routing assignment
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartRoutingsRemoveSmartRoutingAssignment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartRoutingsRemoveSmartRoutingAssignment(params: {

    /**
     * Smart routing id
     */
    smartRoutingId: string;

    /**
     * Smart device id
     */
    smartDeviceId: string;
  }): Observable<SmartRoutingsProductModel> {

    return this.smartRoutingsRemoveSmartRoutingAssignment$Response(params).pipe(
      map((r: StrictHttpResponse<SmartRoutingsProductModel>) => r.body as SmartRoutingsProductModel)
    );
  }

}
