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

import {LoyaltyCardgroupsDTO} from '../models/loyalty-cardgroups-dto';
import {LoyaltyCardgroupsDTOCheckPasscodeEnabled} from '../models/loyalty-cardgroups-dto-check-passcode-enabled';
import {LoyaltyCardgroupsList} from '../models/loyalty-cardgroups-list';
import {LoyaltyCardgroupsProductModel} from '../models/loyalty-cardgroups-product-model';
import {ResultBoolean} from '../models/result-boolean';


/**
 * Card groups define different programmes offered by a
 * merchant. Every merchant card is assigned to one card group at a time. The card
 * group can be changed during the lifetime of the card, for instance to lift a
 * gift card to become a customer card, which is an important conversion goal. You
 * would also add customer data in this moment. The card credits are kept, when
 * you change the card group.
 */
@Injectable({
  providedIn: 'root',
})
export class LoyaltyCardgroupsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loyaltyCardgroupsGetAll
   */
  static readonly LoyaltyCardgroupsGetAllPath = '/Loyalty/Cardgroups';

  /**
   * GET Loyalty/Cardgroups.
   *
   * Get a list of loyalty card groups
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardgroupsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardgroupsGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<LoyaltyCardgroupsList>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardgroupsService.LoyaltyCardgroupsGetAllPath, 'get');
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
        return r as StrictHttpResponse<LoyaltyCardgroupsList>;
      })
    );
  }

  /**
   * GET Loyalty/Cardgroups.
   *
   * Get a list of loyalty card groups
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardgroupsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardgroupsGetAll(params?: {

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
  }): Observable<LoyaltyCardgroupsList> {

    return this.loyaltyCardgroupsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCardgroupsList>) => r.body as LoyaltyCardgroupsList)
    );
  }

  /**
   * Path part for operation loyaltyCardgroupsAddCardGroup
   */
  static readonly LoyaltyCardgroupsAddCardGroupPath = '/Loyalty/Cardgroups';

  /**
   * POST Loyalty/Cardgroups.
   *
   * Add loyalty card group
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardgroupsAddCardGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCardgroupsAddCardGroup$Response(params?: {

    /**
     * Loyalty card group properties
     */
    body?: LoyaltyCardgroupsDTO
  }): Observable<StrictHttpResponse<LoyaltyCardgroupsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardgroupsService.LoyaltyCardgroupsAddCardGroupPath, 'post');
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
        return r as StrictHttpResponse<LoyaltyCardgroupsProductModel>;
      })
    );
  }

  /**
   * POST Loyalty/Cardgroups.
   *
   * Add loyalty card group
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardgroupsAddCardGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCardgroupsAddCardGroup(params?: {

    /**
     * Loyalty card group properties
     */
    body?: LoyaltyCardgroupsDTO
  }): Observable<LoyaltyCardgroupsProductModel> {

    return this.loyaltyCardgroupsAddCardGroup$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCardgroupsProductModel>) => r.body as LoyaltyCardgroupsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyCardgroupsGetOne
   */
  static readonly LoyaltyCardgroupsGetOnePath = '/Loyalty/Cardgroups/{loyaltyCardGroupId}';

  /**
   * GET Loyalty/Cardgroups/{loyaltyCardGroupId}.
   *
   * Get loyalty card group for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardgroupsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardgroupsGetOne$Response(params: {

    /**
     * Search one by provided id
     */
    loyaltyCardGroupId: string;
  }): Observable<StrictHttpResponse<LoyaltyCardgroupsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardgroupsService.LoyaltyCardgroupsGetOnePath, 'get');
    if (params) {
      rb.path('loyaltyCardGroupId', params.loyaltyCardGroupId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoyaltyCardgroupsProductModel>;
      })
    );
  }

  /**
   * GET Loyalty/Cardgroups/{loyaltyCardGroupId}.
   *
   * Get loyalty card group for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardgroupsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardgroupsGetOne(params: {

    /**
     * Search one by provided id
     */
    loyaltyCardGroupId: string;
  }): Observable<LoyaltyCardgroupsProductModel> {

    return this.loyaltyCardgroupsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCardgroupsProductModel>) => r.body as LoyaltyCardgroupsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyCardgroupsUpdateCardGroup
   */
  static readonly LoyaltyCardgroupsUpdateCardGroupPath = '/Loyalty/Cardgroups/{loyaltyCardGroupId}';

  /**
   * PUT Loyalty/Cardgroups/{loyaltyCardGroupId}.
   *
   * Update loyalty card group
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardgroupsUpdateCardGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCardgroupsUpdateCardGroup$Response(params: {

    /**
     * Loyalty card group id
     */
    loyaltyCardGroupId: string;

    /**
     * Loyalty card group properties
     */
    body?: LoyaltyCardgroupsDTO
  }): Observable<StrictHttpResponse<LoyaltyCardgroupsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardgroupsService.LoyaltyCardgroupsUpdateCardGroupPath, 'put');
    if (params) {
      rb.path('loyaltyCardGroupId', params.loyaltyCardGroupId, {});
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
        return r as StrictHttpResponse<LoyaltyCardgroupsProductModel>;
      })
    );
  }

  /**
   * PUT Loyalty/Cardgroups/{loyaltyCardGroupId}.
   *
   * Update loyalty card group
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardgroupsUpdateCardGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCardgroupsUpdateCardGroup(params: {

    /**
     * Loyalty card group id
     */
    loyaltyCardGroupId: string;

    /**
     * Loyalty card group properties
     */
    body?: LoyaltyCardgroupsDTO
  }): Observable<LoyaltyCardgroupsProductModel> {

    return this.loyaltyCardgroupsUpdateCardGroup$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCardgroupsProductModel>) => r.body as LoyaltyCardgroupsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyCardgroupsCheckPassCodeEnabled
   */
  static readonly LoyaltyCardgroupsCheckPassCodeEnabledPath = '/Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled';

  /**
   * POST Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled.
   *
   * Check whether passcode check is enabled
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardgroupsCheckPassCodeEnabled()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCardgroupsCheckPassCodeEnabled$Response(params: {

    /**
     * Loyalty card group id
     */
    loyaltyCardGroupId: string;

    /**
     * Check passcode details
     */
    body?: LoyaltyCardgroupsDTOCheckPasscodeEnabled
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardgroupsService.LoyaltyCardgroupsCheckPassCodeEnabledPath, 'post');
    if (params) {
      rb.path('loyaltyCardGroupId', params.loyaltyCardGroupId, {});
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
   * POST Loyalty/Cardgroups/{loyaltyCardGroupId}/checkPasscodeEnabled.
   *
   * Check whether passcode check is enabled
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardgroupsCheckPassCodeEnabled$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCardgroupsCheckPassCodeEnabled(params: {

    /**
     * Loyalty card group id
     */
    loyaltyCardGroupId: string;

    /**
     * Check passcode details
     */
    body?: LoyaltyCardgroupsDTOCheckPasscodeEnabled
  }): Observable<ResultBoolean> {

    return this.loyaltyCardgroupsCheckPassCodeEnabled$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

  /**
   * Path part for operation loyaltySalesGetCardgroupsByMerchantId
   */
  static readonly LoyaltySalesGetCardgroupsByMerchantIdPath = '/Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID';

  /**
   * GET Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID.
   *
   * Get cardgroups by merchant id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltySalesGetCardgroupsByMerchantId()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltySalesGetCardgroupsByMerchantId$Response(params: {

    /**
     * Search by provided id
     */
    generalMerchantId: string;
  }): Observable<StrictHttpResponse<Array<LoyaltyCardgroupsProductModel>>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardgroupsService.LoyaltySalesGetCardgroupsByMerchantIdPath, 'get');
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
        return r as StrictHttpResponse<Array<LoyaltyCardgroupsProductModel>>;
      })
    );
  }

  /**
   * GET Loyalty/Sales/{generalMerchantId}/CardGroupsByMerchantID.
   *
   * Get cardgroups by merchant id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltySalesGetCardgroupsByMerchantId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltySalesGetCardgroupsByMerchantId(params: {

    /**
     * Search by provided id
     */
    generalMerchantId: string;
  }): Observable<Array<LoyaltyCardgroupsProductModel>> {

    return this.loyaltySalesGetCardgroupsByMerchantId$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LoyaltyCardgroupsProductModel>>) => r.body as Array<LoyaltyCardgroupsProductModel>)
    );
  }

}
