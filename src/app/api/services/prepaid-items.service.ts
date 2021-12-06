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

import {PrepaidItemsList} from '../models/prepaid-items-list';
import {PrepaidItemsProductModel} from '../models/prepaid-items-product-model';


/**
 * Manages the available e-goods products, either PIN printing
 * or POS activation (POSA). Examples for such products are phone charge, or
 * vouchers for an online shop.
 */
@Injectable({
  providedIn: 'root',
})
export class PrepaidItemsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation prepaidItemsGetAll
   */
  static readonly PrepaidItemsGetAllPath = '/Prepaid/Items';

  /**
   * GET Prepaid/Items.
   *
   * Get a list of prepaid items
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prepaidItemsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepaidItemsGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<PrepaidItemsList>> {

    const rb = new RequestBuilder(this.rootUrl, PrepaidItemsService.PrepaidItemsGetAllPath, 'get');
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
        return r as StrictHttpResponse<PrepaidItemsList>;
      })
    );
  }

  /**
   * GET Prepaid/Items.
   *
   * Get a list of prepaid items
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prepaidItemsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepaidItemsGetAll(params?: {

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
  }): Observable<PrepaidItemsList> {

    return this.prepaidItemsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<PrepaidItemsList>) => r.body as PrepaidItemsList)
    );
  }

  /**
   * Path part for operation prepaidItemsGetOne
   */
  static readonly PrepaidItemsGetOnePath = '/Prepaid/Items/{prepaidItemId}';

  /**
   * GET Prepaid/Items/{prepaidItemId}.
   *
   * Get one prepaid item for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prepaidItemsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepaidItemsGetOne$Response(params: {

    /**
     * Prepaid item id
     */
    prepaidItemId: string;
  }): Observable<StrictHttpResponse<PrepaidItemsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PrepaidItemsService.PrepaidItemsGetOnePath, 'get');
    if (params) {
      rb.path('prepaidItemId', params.prepaidItemId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PrepaidItemsProductModel>;
      })
    );
  }

  /**
   * GET Prepaid/Items/{prepaidItemId}.
   *
   * Get one prepaid item for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prepaidItemsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prepaidItemsGetOne(params: {

    /**
     * Prepaid item id
     */
    prepaidItemId: string;
  }): Observable<PrepaidItemsProductModel> {

    return this.prepaidItemsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<PrepaidItemsProductModel>) => r.body as PrepaidItemsProductModel)
    );
  }

}
