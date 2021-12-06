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

import {SmartTransactionsDTO} from '../models/smart-transactions-dto';
import {SmartTransactionsList} from '../models/smart-transactions-list';
import {SmartTransactionsPreTransactionModel} from '../models/smart-transactions-pre-transaction-model';
import {SmartTransactionsPrepare} from '../models/smart-transactions-prepare';
import {SmartTransactionsProductModel} from '../models/smart-transactions-product-model';
import {SmartTransactionsSetDeliveryModel} from '../models/smart-transactions-set-delivery-model';


/**
 * In difference to a Payment Transaction, a Smart Transaction
 * covers a wider range of use cases. It is also more connected to the business
 * case than to the many details of the payment pocess. And it is the basis for
 * Smart Checkout and Payment Link.
 *
 * Smart Transactions can be used for e-commerce and cross channel scenarios, to
 * integrate customer loyalty programmes at the POS, etc., etc. It is not
 * predetermined to a specific payment method, and will manage the payment
 * transaction for you.
 */
@Injectable({
  providedIn: 'root',
})
export class SmartTransactionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation smartTransactionsGetAll
   */
  static readonly SmartTransactionsGetAllPath = '/Smart/Transactions';

  /**
   * GET Smart/Transactions.
   *
   * Get a list of smart transactions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<SmartTransactionsList>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsGetAllPath, 'get');
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
        return r as StrictHttpResponse<SmartTransactionsList>;
      })
    );
  }

  /**
   * GET Smart/Transactions.
   *
   * Get a list of smart transactions
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsGetAll(params?: {

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
  }): Observable<SmartTransactionsList> {

    return this.smartTransactionsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsList>) => r.body as SmartTransactionsList)
    );
  }

  /**
   * Path part for operation smartTransactionsAddTransaction
   */
  static readonly SmartTransactionsAddTransactionPath = '/Smart/Transactions';

  /**
   * POST Smart/Transactions.
   *
   * Create new smart transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsAddTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsAddTransaction$Response(params?: {

    /**
     * Smart transaction properties
     */
    body?: SmartTransactionsDTO
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsAddTransactionPath, 'post');
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
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions.
   *
   * Create new smart transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsAddTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsAddTransaction(params?: {

    /**
     * Smart transaction properties
     */
    body?: SmartTransactionsDTO
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsAddTransaction$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsGetOne
   */
  static readonly SmartTransactionsGetOnePath = '/Smart/Transactions/{smartTransactionId}';

  /**
   * GET Smart/Transactions/{smartTransactionId}.
   *
   * Get one smart transaction for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsGetOne$Response(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsGetOnePath, 'get');
    if (params) {
      rb.path('smartTransactionId', params.smartTransactionId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * GET Smart/Transactions/{smartTransactionId}.
   *
   * Get one smart transaction for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsGetOne(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsUpdateTransaction
   */
  static readonly SmartTransactionsUpdateTransactionPath = '/Smart/Transactions/{smartTransactionId}';

  /**
   * PUT Smart/Transactions/{smartTransactionId}.
   *
   * Update smart transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsUpdateTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsUpdateTransaction$Response(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;

    /**
     * Smart transaction properties
     */
    body?: SmartTransactionsDTO
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsUpdateTransactionPath, 'put');
    if (params) {
      rb.path('smartTransactionId', params.smartTransactionId, {});
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
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * PUT Smart/Transactions/{smartTransactionId}.
   *
   * Update smart transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsUpdateTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsUpdateTransaction(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;

    /**
     * Smart transaction properties
     */
    body?: SmartTransactionsDTO
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsUpdateTransaction$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsCancelTransaction
   */
  static readonly SmartTransactionsCancelTransactionPath = '/Smart/Transactions/{smartTransactionId}/cancel';

  /**
   * POST Smart/Transactions/{smartTransactionId}/cancel.
   *
   * Method to cancel the transaction with given idn
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsCancelTransaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsCancelTransaction$Response(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsCancelTransactionPath, 'post');
    if (params) {
      rb.path('smartTransactionId', params.smartTransactionId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions/{smartTransactionId}/cancel.
   *
   * Method to cancel the transaction with given idn
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsCancelTransaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsCancelTransaction(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsCancelTransaction$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsStartTransaction
   */
  static readonly SmartTransactionsStartTransactionPath = '/Smart/Transactions/{smartTransactionId}/start/{paymentMethod}';

  /**
   * POST Smart/Transactions/{smartTransactionId}/start/{paymentMethod}.
   *
   * Start smart transaction with given payment method
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsStartTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsStartTransaction$Response(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;

    /**
     * Payment method
     */
    paymentMethod: string;

    /**
     * Information which customer and container will be used to this operation
     */
    body?: SmartTransactionsPrepare
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsStartTransactionPath, 'post');
    if (params) {
      rb.path('smartTransactionId', params.smartTransactionId, {});
      rb.path('paymentMethod', params.paymentMethod, {});
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
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions/{smartTransactionId}/start/{paymentMethod}.
   *
   * Start smart transaction with given payment method
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsStartTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsStartTransaction(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;

    /**
     * Payment method
     */
    paymentMethod: string;

    /**
     * Information which customer and container will be used to this operation
     */
    body?: SmartTransactionsPrepare
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsStartTransaction$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsCancelTrx
   */
  static readonly SmartTransactionsCancelTrxPath = '/Smart/Transactions/{smartTransactionId}/canceltrx';

  /**
   * POST Smart/Transactions/{smartTransactionId}/canceltrx.
   *
   * Starts Cancel 'Cash' transaction on Terminal with 'receipt_number' ('Beleg-Nr.')
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsCancelTrx()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsCancelTrx$Response(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsCancelTrxPath, 'post');
    if (params) {
      rb.path('smartTransactionId', params.smartTransactionId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions/{smartTransactionId}/canceltrx.
   *
   * Starts Cancel 'Cash' transaction on Terminal with 'receipt_number' ('Beleg-Nr.')
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsCancelTrx$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsCancelTrx(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsCancelTrx$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsDiagnose
   */
  static readonly SmartTransactionsDiagnosePath = '/Smart/Transactions/{smartDeviceId}/diagnosis';

  /**
   * POST Smart/Transactions/{smartDeviceId}/diagnosis.
   *
   * Starts extended Diagnose on Terminal, this method is normally called by SDK's from cash register
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsDiagnose()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsDiagnose$Response(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsDiagnosePath, 'post');
    if (params) {
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
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions/{smartDeviceId}/diagnosis.
   *
   * Starts extended Diagnose on Terminal, this method is normally called by SDK's from cash register
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsDiagnose$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsDiagnose(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsDiagnose$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsStartEndOfDayReport
   */
  static readonly SmartTransactionsStartEndOfDayReportPath = '/Smart/Transactions/{smartDeviceId}/endOfDay';

  /**
   * POST Smart/Transactions/{smartDeviceId}/endOfDay.
   *
   * Starts End of Day Report on Terminal, this method is normally called by SDK's from cash register
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsStartEndOfDayReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsStartEndOfDayReport$Response(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsStartEndOfDayReportPath, 'post');
    if (params) {
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
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions/{smartDeviceId}/endOfDay.
   *
   * Starts End of Day Report on Terminal, this method is normally called by SDK's from cash register
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsStartEndOfDayReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsStartEndOfDayReport(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsStartEndOfDayReport$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsPreTransaction
   */
  static readonly SmartTransactionsPreTransactionPath = '/Smart/Transactions/{smartTransactionId}/preTransaction';

  /**
   * POST Smart/Transactions/{smartTransactionId}/preTransaction.
   *
   * Function that checks balance of merchantcard from ident and if possible creates bonus product items for basket
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsPreTransaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsPreTransaction$Response(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;
  }): Observable<StrictHttpResponse<SmartTransactionsPreTransactionModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsPreTransactionPath, 'post');
    if (params) {
      rb.path('smartTransactionId', params.smartTransactionId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartTransactionsPreTransactionModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions/{smartTransactionId}/preTransaction.
   *
   * Function that checks balance of merchantcard from ident and if possible creates bonus product items for basket
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsPreTransaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTransactionsPreTransaction(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;
  }): Observable<SmartTransactionsPreTransactionModel> {

    return this.smartTransactionsPreTransaction$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsPreTransactionModel>) => r.body as SmartTransactionsPreTransactionModel)
    );
  }

  /**
   * Path part for operation smartTransactionsPrepare
   */
  static readonly SmartTransactionsPreparePath = '/Smart/Transactions/{smartTransactionId}/prepare/{paymentMethod}';

  /**
   * POST Smart/Transactions/stx_xxx/prepare/{paymentMethod}.
   *
   * Create and score payment transaction assigned to given smart transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsPrepare()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsPrepare$Response(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;

    /**
     * Payment method
     */
    paymentMethod: string;

    /**
     * Information which customer and container will be used to this operation
     */
    body?: SmartTransactionsPrepare
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsPreparePath, 'post');
    if (params) {
      rb.path('smartTransactionId', params.smartTransactionId, {});
      rb.path('paymentMethod', params.paymentMethod, {});
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
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions/stx_xxx/prepare/{paymentMethod}.
   *
   * Create and score payment transaction assigned to given smart transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsPrepare$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsPrepare(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;

    /**
     * Payment method
     */
    paymentMethod: string;

    /**
     * Information which customer and container will be used to this operation
     */
    body?: SmartTransactionsPrepare
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsPrepare$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

  /**
   * Path part for operation smartTransactionsSetDelivery
   */
  static readonly SmartTransactionsSetDeliveryPath = '/Smart/Transactions/{smartTransactionId}/setDelivery';

  /**
   * POST Smart/Transactions/stx_xxx/setDelivery.
   *
   * Set delivery options to given smart transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTransactionsSetDelivery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsSetDelivery$Response(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;

    /**
     * Information about the delivery status
     */
    body?: SmartTransactionsSetDeliveryModel
  }): Observable<StrictHttpResponse<SmartTransactionsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTransactionsService.SmartTransactionsSetDeliveryPath, 'post');
    if (params) {
      rb.path('smartTransactionId', params.smartTransactionId, {});
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
        return r as StrictHttpResponse<SmartTransactionsProductModel>;
      })
    );
  }

  /**
   * POST Smart/Transactions/stx_xxx/setDelivery.
   *
   * Set delivery options to given smart transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTransactionsSetDelivery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartTransactionsSetDelivery(params: {

    /**
     * Smart transaction id
     */
    smartTransactionId: string;

    /**
     * Information about the delivery status
     */
    body?: SmartTransactionsSetDeliveryModel
  }): Observable<SmartTransactionsProductModel> {

    return this.smartTransactionsSetDelivery$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTransactionsProductModel>) => r.body as SmartTransactionsProductModel)
    );
  }

}
