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

import {PaymentCustomersDTO} from '../models/payment-customers-dto';
import {PaymentCustomersList} from '../models/payment-customers-list';
import {PaymentCustomersProductModel} from '../models/payment-customers-product-model';


/**
 * The Payment Customer is used to store the customer details,
 * and use it as biling or delivery address. It is also the owner of the Payment
 * Containers.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentCustomersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paymentContainersPaymentCustomersGet
   */
  static readonly PaymentContainersPaymentCustomersGetPath = '/Payment/Customers';

  /**
   * GET Payment/Customers.
   *
   * Get a list of payment customers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentCustomersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentCustomersGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<PaymentCustomersList>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentCustomersService.PaymentContainersPaymentCustomersGetPath, 'get');
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
        return r as StrictHttpResponse<PaymentCustomersList>;
      })
    );
  }

  /**
   * GET Payment/Customers.
   *
   * Get a list of payment customers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentCustomersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentCustomersGet(params?: {

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
  }): Observable<PaymentCustomersList> {

    return this.paymentContainersPaymentCustomersGet$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentCustomersList>) => r.body as PaymentCustomersList)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentCustomersPost
   */
  static readonly PaymentContainersPaymentCustomersPostPath = '/Payment/Customers';

  /**
   * POST Payment/Customers.
   *
   * Add new customer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentCustomersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentCustomersPost$Response(params?: {

    /**
     * Payment customer properties
     */
    body?: PaymentCustomersDTO
  }): Observable<StrictHttpResponse<PaymentCustomersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentCustomersService.PaymentContainersPaymentCustomersPostPath, 'post');
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
        return r as StrictHttpResponse<PaymentCustomersProductModel>;
      })
    );
  }

  /**
   * POST Payment/Customers.
   *
   * Add new customer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentCustomersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentCustomersPost(params?: {

    /**
     * Payment customer properties
     */
    body?: PaymentCustomersDTO
  }): Observable<PaymentCustomersProductModel> {

    return this.paymentContainersPaymentCustomersPost$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentCustomersProductModel>) => r.body as PaymentCustomersProductModel)
    );
  }

  /**
   * Path part for operation paymentCustomersPaymentCustomersGetById
   */
  static readonly PaymentCustomersPaymentCustomersGetByIdPath = '/Payment/Customers/{paymentCustomerId}';

  /**
   * GET Payment/Customers/{paymentCustomerId}.
   *
   * Get all payment customers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentCustomersPaymentCustomersGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentCustomersPaymentCustomersGetById$Response(params: {

    /**
     * Payment customer id
     */
    paymentCustomerId: string;
  }): Observable<StrictHttpResponse<PaymentCustomersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentCustomersService.PaymentCustomersPaymentCustomersGetByIdPath, 'get');
    if (params) {
      rb.path('paymentCustomerId', params.paymentCustomerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentCustomersProductModel>;
      })
    );
  }

  /**
   * GET Payment/Customers/{paymentCustomerId}.
   *
   * Get all payment customers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentCustomersPaymentCustomersGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentCustomersPaymentCustomersGetById(params: {

    /**
     * Payment customer id
     */
    paymentCustomerId: string;
  }): Observable<PaymentCustomersProductModel> {

    return this.paymentCustomersPaymentCustomersGetById$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentCustomersProductModel>) => r.body as PaymentCustomersProductModel)
    );
  }

  /**
   * Path part for operation paymentCustomersPaymentCustomersIdPut
   */
  static readonly PaymentCustomersPaymentCustomersIdPutPath = '/Payment/Customers/{paymentCustomerId}';

  /**
   * PUT Payment/Customers/{paymentCustomerId}.
   *
   * Update payment customer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentCustomersPaymentCustomersIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentCustomersPaymentCustomersIdPut$Response(params: {

    /**
     * Payment customer id
     */
    paymentCustomerId: string;

    /**
     * Payment customer properties
     */
    body?: PaymentCustomersDTO
  }): Observable<StrictHttpResponse<PaymentCustomersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentCustomersService.PaymentCustomersPaymentCustomersIdPutPath, 'put');
    if (params) {
      rb.path('paymentCustomerId', params.paymentCustomerId, {});
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
        return r as StrictHttpResponse<PaymentCustomersProductModel>;
      })
    );
  }

  /**
   * PUT Payment/Customers/{paymentCustomerId}.
   *
   * Update payment customer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentCustomersPaymentCustomersIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentCustomersPaymentCustomersIdPut(params: {

    /**
     * Payment customer id
     */
    paymentCustomerId: string;

    /**
     * Payment customer properties
     */
    body?: PaymentCustomersDTO
  }): Observable<PaymentCustomersProductModel> {

    return this.paymentCustomersPaymentCustomersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentCustomersProductModel>) => r.body as PaymentCustomersProductModel)
    );
  }

  /**
   * Path part for operation paymentCustomersPaymentCustomersIdDelete
   */
  static readonly PaymentCustomersPaymentCustomersIdDeletePath = '/Payment/Customers/{paymentCustomerId}';

  /**
   * DELETE Payment/Customers/{paymentCustomerId}.
   *
   * Delete payment customer
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentCustomersPaymentCustomersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentCustomersPaymentCustomersIdDelete$Response(params: {

    /**
     * Payment customer id
     */
    paymentCustomerId: string;
  }): Observable<StrictHttpResponse<Array<PaymentCustomersProductModel>>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentCustomersService.PaymentCustomersPaymentCustomersIdDeletePath, 'delete');
    if (params) {
      rb.path('paymentCustomerId', params.paymentCustomerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaymentCustomersProductModel>>;
      })
    );
  }

  /**
   * DELETE Payment/Customers/{paymentCustomerId}.
   *
   * Delete payment customer
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentCustomersPaymentCustomersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentCustomersPaymentCustomersIdDelete(params: {

    /**
     * Payment customer id
     */
    paymentCustomerId: string;
  }): Observable<Array<PaymentCustomersProductModel>> {

    return this.paymentCustomersPaymentCustomersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PaymentCustomersProductModel>>) => r.body as Array<PaymentCustomersProductModel>)
    );
  }

}
