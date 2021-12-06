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

import {LoyaltyCustomersDTO} from '../models/loyalty-customers-dto';
import {LoyaltyCustomersList} from '../models/loyalty-customers-list';
import {LoyaltyCustomersProductModel} from '../models/loyalty-customers-product-model';


/**
 * The optional loyalty customer holds the customer data of a
 * loyalty card. A secucard issued as anonymous gift card can be personalized
 * later, for instance to use it as customer card then. S. a. Card Groups for more
 * information.
 */
@Injectable({
  providedIn: 'root',
})
export class LoyaltyCustomersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loyaltyCustomersGetAll
   */
  static readonly LoyaltyCustomersGetAllPath = '/Loyalty/Customers';

  /**
   * GET Loyalty/Customers.
   *
   * Get a list of loyalty customers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCustomersGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCustomersGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<LoyaltyCustomersList>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCustomersService.LoyaltyCustomersGetAllPath, 'get');
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
        return r as StrictHttpResponse<LoyaltyCustomersList>;
      })
    );
  }

  /**
   * GET Loyalty/Customers.
   *
   * Get a list of loyalty customers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCustomersGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCustomersGetAll(params?: {

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
  }): Observable<LoyaltyCustomersList> {

    return this.loyaltyCustomersGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCustomersList>) => r.body as LoyaltyCustomersList)
    );
  }

  /**
   * Path part for operation loyaltyCustomersAddCustomer
   */
  static readonly LoyaltyCustomersAddCustomerPath = '/Loyalty/Customers';

  /**
   * POST Loyalty/Customers.
   *
   * Add loyalty customer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCustomersAddCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCustomersAddCustomer$Response(params?: {

    /**
     * loyalty Customer container properties
     */
    body?: LoyaltyCustomersDTO
  }): Observable<StrictHttpResponse<LoyaltyCustomersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCustomersService.LoyaltyCustomersAddCustomerPath, 'post');
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
        return r as StrictHttpResponse<LoyaltyCustomersProductModel>;
      })
    );
  }

  /**
   * POST Loyalty/Customers.
   *
   * Add loyalty customer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCustomersAddCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCustomersAddCustomer(params?: {

    /**
     * loyalty Customer container properties
     */
    body?: LoyaltyCustomersDTO
  }): Observable<LoyaltyCustomersProductModel> {

    return this.loyaltyCustomersAddCustomer$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCustomersProductModel>) => r.body as LoyaltyCustomersProductModel)
    );
  }

  /**
   * Path part for operation loyaltyCustomersGetOne
   */
  static readonly LoyaltyCustomersGetOnePath = '/Loyalty/Customers/{loyaltyCustomerId}';

  /**
   * GET Loyalty/Customers/{loyaltyCustomerId}.
   *
   * Get loyalty customer for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCustomersGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCustomersGetOne$Response(params: {

    /**
     * Search one loyalty customer by provided id
     */
    loyaltyCustomerId: string;
  }): Observable<StrictHttpResponse<LoyaltyCustomersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCustomersService.LoyaltyCustomersGetOnePath, 'get');
    if (params) {
      rb.path('loyaltyCustomerId', params.loyaltyCustomerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoyaltyCustomersProductModel>;
      })
    );
  }

  /**
   * GET Loyalty/Customers/{loyaltyCustomerId}.
   *
   * Get loyalty customer for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCustomersGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCustomersGetOne(params: {

    /**
     * Search one loyalty customer by provided id
     */
    loyaltyCustomerId: string;
  }): Observable<LoyaltyCustomersProductModel> {

    return this.loyaltyCustomersGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCustomersProductModel>) => r.body as LoyaltyCustomersProductModel)
    );
  }

  /**
   * Path part for operation loyaltyCustomersUpdateCustomer
   */
  static readonly LoyaltyCustomersUpdateCustomerPath = '/Loyalty/Customers/{loyaltyCustomerId}';

  /**
   * PUT Loyalty/Customers/{loyaltyCustomerId}.
   *
   * Function to update customer's data
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCustomersUpdateCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCustomersUpdateCustomer$Response(params: {

    /**
     * loyalty Customer Id CUS_XXX
     */
    loyaltyCustomerId: string;

    /**
     * loyalty Customer container properties
     */
    body?: LoyaltyCustomersDTO
  }): Observable<StrictHttpResponse<LoyaltyCustomersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCustomersService.LoyaltyCustomersUpdateCustomerPath, 'put');
    if (params) {
      rb.path('loyaltyCustomerId', params.loyaltyCustomerId, {});
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
        return r as StrictHttpResponse<LoyaltyCustomersProductModel>;
      })
    );
  }

  /**
   * PUT Loyalty/Customers/{loyaltyCustomerId}.
   *
   * Function to update customer's data
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCustomersUpdateCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCustomersUpdateCustomer(params: {

    /**
     * loyalty Customer Id CUS_XXX
     */
    loyaltyCustomerId: string;

    /**
     * loyalty Customer container properties
     */
    body?: LoyaltyCustomersDTO
  }): Observable<LoyaltyCustomersProductModel> {

    return this.loyaltyCustomersUpdateCustomer$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCustomersProductModel>) => r.body as LoyaltyCustomersProductModel)
    );
  }

  /**
   * Path part for operation loyaltyCustomersAssignPaymentContainer
   */
  static readonly LoyaltyCustomersAssignPaymentContainerPath = '/Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}';

  /**
   * POST Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}.
   *
   * Assigns LoyaltyPaymentContainer to customer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCustomersAssignPaymentContainer()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCustomersAssignPaymentContainer$Response(params: {

    /**
     * Loyalty customer id
     */
    loyaltyCustomerId: string;

    /**
     * LoyaltyPaymentContainer id
     */
    loyaltyPaymentContainerId: string;
  }): Observable<StrictHttpResponse<LoyaltyCustomersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCustomersService.LoyaltyCustomersAssignPaymentContainerPath, 'post');
    if (params) {
      rb.path('loyaltyCustomerId', params.loyaltyCustomerId, {});
      rb.path('loyaltyPaymentContainerId', params.loyaltyPaymentContainerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoyaltyCustomersProductModel>;
      })
    );
  }

  /**
   * POST Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}.
   *
   * Assigns LoyaltyPaymentContainer to customer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCustomersAssignPaymentContainer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCustomersAssignPaymentContainer(params: {

    /**
     * Loyalty customer id
     */
    loyaltyCustomerId: string;

    /**
     * LoyaltyPaymentContainer id
     */
    loyaltyPaymentContainerId: string;
  }): Observable<LoyaltyCustomersProductModel> {

    return this.loyaltyCustomersAssignPaymentContainer$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCustomersProductModel>) => r.body as LoyaltyCustomersProductModel)
    );
  }

  /**
   * Path part for operation loyaltyCustomersRemoveAssignedPaymentContainer
   */
  static readonly LoyaltyCustomersRemoveAssignedPaymentContainerPath = '/Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}';

  /**
   * DELETE Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}.
   *
   * Removes an assigned LoyaltyPaymentContainer from customer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCustomersRemoveAssignedPaymentContainer()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCustomersRemoveAssignedPaymentContainer$Response(params: {

    /**
     * Loyalty customer id
     */
    loyaltyCustomerId: string;

    /**
     * LoyaltyPaymentContainer id
     */
    loyaltyPaymentContainerId: string;
  }): Observable<StrictHttpResponse<LoyaltyCustomersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCustomersService.LoyaltyCustomersRemoveAssignedPaymentContainerPath, 'delete');
    if (params) {
      rb.path('loyaltyCustomerId', params.loyaltyCustomerId, {});
      rb.path('loyaltyPaymentContainerId', params.loyaltyPaymentContainerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoyaltyCustomersProductModel>;
      })
    );
  }

  /**
   * DELETE Loyalty/Customers/{loyaltyCustomerId}/assignPaymentContainer/{loyaltyPaymentContainerId}.
   *
   * Removes an assigned LoyaltyPaymentContainer from customer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCustomersRemoveAssignedPaymentContainer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCustomersRemoveAssignedPaymentContainer(params: {

    /**
     * Loyalty customer id
     */
    loyaltyCustomerId: string;

    /**
     * LoyaltyPaymentContainer id
     */
    loyaltyPaymentContainerId: string;
  }): Observable<LoyaltyCustomersProductModel> {

    return this.loyaltyCustomersRemoveAssignedPaymentContainer$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCustomersProductModel>) => r.body as LoyaltyCustomersProductModel)
    );
  }

}
