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

import {PaymentTransactionCancelDTO} from '../models/payment-transaction-cancel-dto';
import {PaymentTransactionsList} from '../models/payment-transactions-list';
import {PaymentTransactionsProductModel} from '../models/payment-transactions-product-model';
import {PaymentTransactionsShippingUrl} from '../models/payment-transactions-shipping-url';
import {SecupayTransactionProductDTO} from '../models/secupay-transaction-product-dto';
import {SecupayTransactionProductModel} from '../models/secupay-transaction-product-model';


/**
 * Payment Transactions authorize and execute the payment,
 * handle possible issues, and control the Payment Iframe.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentTransactionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paymentTransactionsGetAll
   */
  static readonly PaymentTransactionsGetAllPath = '/Payment/Transactions';

  /**
   * GET Payment/Transactions.
   *
   * Get a list of payment transactions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentTransactionsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentTransactionsGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<PaymentTransactionsList>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTransactionsService.PaymentTransactionsGetAllPath, 'get');
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
        return r as StrictHttpResponse<PaymentTransactionsList>;
      })
    );
  }

  /**
   * GET Payment/Transactions.
   *
   * Get a list of payment transactions
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentTransactionsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentTransactionsGetAll(params?: {

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
  }): Observable<PaymentTransactionsList> {

    return this.paymentTransactionsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentTransactionsList>) => r.body as PaymentTransactionsList)
    );
  }

  /**
   * Path part for operation paymentTransactionAddTransaction
   */
  static readonly PaymentTransactionAddTransactionPath = '/Payment/Transactions';

  /**
   * POST Payment/Transactions.
   *
   * Create a payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentTransactionAddTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentTransactionAddTransaction$Response(params?: {

    /**
     * Create payment transaction input properties
     */
    body?: SecupayTransactionProductDTO
  }): Observable<StrictHttpResponse<SecupayTransactionProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTransactionsService.PaymentTransactionAddTransactionPath, 'post');
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
        return r as StrictHttpResponse<SecupayTransactionProductModel>;
      })
    );
  }

  /**
   * POST Payment/Transactions.
   *
   * Create a payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentTransactionAddTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentTransactionAddTransaction(params?: {

    /**
     * Create payment transaction input properties
     */
    body?: SecupayTransactionProductDTO
  }): Observable<SecupayTransactionProductModel> {

    return this.paymentTransactionAddTransaction$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionProductModel>) => r.body as SecupayTransactionProductModel)
    );
  }

  /**
   * Path part for operation paymentTransactionsGetOne
   */
  static readonly PaymentTransactionsGetOnePath = '/Payment/Transactions/{paymentTransactionId}';

  /**
   * GET Payment/Transactions/{paymentTransactionId}.
   *
   * Get all payment transactions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentTransactionsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentTransactionsGetOne$Response(params: {

    /**
     * Payment transaction id
     */
    paymentTransactionId: string;
  }): Observable<StrictHttpResponse<PaymentTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTransactionsService.PaymentTransactionsGetOnePath, 'get');
    if (params) {
      rb.path('paymentTransactionId', params.paymentTransactionId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentTransactionsProductModel>;
      })
    );
  }

  /**
   * GET Payment/Transactions/{paymentTransactionId}.
   *
   * Get all payment transactions
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentTransactionsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentTransactionsGetOne(params: {

    /**
     * Payment transaction id
     */
    paymentTransactionId: string;
  }): Observable<PaymentTransactionsProductModel> {

    return this.paymentTransactionsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentTransactionsProductModel>) => r.body as PaymentTransactionsProductModel)
    );
  }

  /**
   * Path part for operation paymentTransactionsCancel
   */
  static readonly PaymentTransactionsCancelPath = '/Payment/Transactions/{paymentTransactionId}/cancel';

  /**
   * POST Payment/Transactions/{paymentTransactionId}/cancel.
   *
   * Cancel a payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentTransactionsCancel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentTransactionsCancel$Response(params: {

    /**
     * Payment transaction id
     */
    paymentTransactionId: string;

    /**
     * Cancel payment transaction input properties
     */
    body?: PaymentTransactionCancelDTO
  }): Observable<StrictHttpResponse<Array<PaymentTransactionsProductModel>>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTransactionsService.PaymentTransactionsCancelPath, 'post');
    if (params) {
      rb.path('paymentTransactionId', params.paymentTransactionId, {});
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
        return r as StrictHttpResponse<Array<PaymentTransactionsProductModel>>;
      })
    );
  }

  /**
   * POST Payment/Transactions/{paymentTransactionId}/cancel.
   *
   * Cancel a payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentTransactionsCancel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentTransactionsCancel(params: {

    /**
     * Payment transaction id
     */
    paymentTransactionId: string;

    /**
     * Cancel payment transaction input properties
     */
    body?: PaymentTransactionCancelDTO
  }): Observable<Array<PaymentTransactionsProductModel>> {

    return this.paymentTransactionsCancel$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PaymentTransactionsProductModel>>) => r.body as Array<PaymentTransactionsProductModel>)
    );
  }

  /**
   * Path part for operation paymentTransactionsGetShippingUrl
   */
  static readonly PaymentTransactionsGetShippingUrlPath = '/Payment/Transactions/{paymentTransactionId}/shippingUrl';

  /**
   * GET Payment/Transactions/{paymentTransactionId}/shippingUrl.
   *
   * Get the url where you can fill the shipping information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentTransactionsGetShippingUrl()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentTransactionsGetShippingUrl$Response(params: {

    /**
     * Payment transaction id
     */
    paymentTransactionId: string;
  }): Observable<StrictHttpResponse<PaymentTransactionsShippingUrl>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTransactionsService.PaymentTransactionsGetShippingUrlPath, 'get');
    if (params) {
      rb.path('paymentTransactionId', params.paymentTransactionId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentTransactionsShippingUrl>;
      })
    );
  }

  /**
   * GET Payment/Transactions/{paymentTransactionId}/shippingUrl.
   *
   * Get the url where you can fill the shipping information
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentTransactionsGetShippingUrl$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentTransactionsGetShippingUrl(params: {

    /**
     * Payment transaction id
     */
    paymentTransactionId: string;
  }): Observable<PaymentTransactionsShippingUrl> {

    return this.paymentTransactionsGetShippingUrl$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentTransactionsShippingUrl>) => r.body as PaymentTransactionsShippingUrl)
    );
  }

  /**
   * Path part for operation paymentTransactionsRevokeAccrual
   */
  static readonly PaymentTransactionsRevokeAccrualPath = '/Payment/Transactions/{paymentTransactionId}/revokeAccrual';

  /**
   * POST Payment/Transactions/{paymentTransactionId}/revokeAccrual.
   *
   * Revoke the accrual flag of a payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentTransactionsRevokeAccrual()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentTransactionsRevokeAccrual$Response(params: {

    /**
     * Payment transaction id
     */
    paymentTransactionId: string;
  }): Observable<StrictHttpResponse<PaymentTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTransactionsService.PaymentTransactionsRevokeAccrualPath, 'post');
    if (params) {
      rb.path('paymentTransactionId', params.paymentTransactionId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Payment/Transactions/{paymentTransactionId}/revokeAccrual.
   *
   * Revoke the accrual flag of a payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentTransactionsRevokeAccrual$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentTransactionsRevokeAccrual(params: {

    /**
     * Payment transaction id
     */
    paymentTransactionId: string;
  }): Observable<PaymentTransactionsProductModel> {

    return this.paymentTransactionsRevokeAccrual$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentTransactionsProductModel>) => r.body as PaymentTransactionsProductModel)
    );
  }

  /**
   * Path part for operation getPaymentTransactionsOldFormat
   */
  static readonly GetPaymentTransactionsOldFormatPath = '/Payment/Transactions/{paymentTransactionId}/OldFormat';

  /**
   * GET Payment/Transactions/{paymentTransactionId}/OldFormat.
   *
   * Get old format for specific payment transactions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPaymentTransactionsOldFormat()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaymentTransactionsOldFormat$Response(params: {

    /**
     * Payment ID (PCI_...) or hash
     */
    paymentTransactionId: string;
  }): Observable<StrictHttpResponse<SecupayTransactionProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentTransactionsService.GetPaymentTransactionsOldFormatPath, 'get');
    if (params) {
      rb.path('paymentTransactionId', params.paymentTransactionId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecupayTransactionProductModel>;
      })
    );
  }

  /**
   * GET Payment/Transactions/{paymentTransactionId}/OldFormat.
   *
   * Get old format for specific payment transactions
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPaymentTransactionsOldFormat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaymentTransactionsOldFormat(params: {

    /**
     * Payment ID (PCI_...) or hash
     */
    paymentTransactionId: string;
  }): Observable<SecupayTransactionProductModel> {

    return this.getPaymentTransactionsOldFormat$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionProductModel>) => r.body as SecupayTransactionProductModel)
    );
  }

}
