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

import {BankAccountDescriptor} from '../models/bank-account-descriptor';
import {PaymentContractsDTOClone} from '../models/payment-contracts-dto-clone';
import {PaymentContractsDTORequestId} from '../models/payment-contracts-dto-request-id';
import {PaymentContractsList} from '../models/payment-contracts-list';
import {PaymentContractsProductModel} from '../models/payment-contracts-product-model';
import {PaymentContractsRequestIdResult} from '../models/payment-contracts-request-id-result';
import {StringList} from '../models/string-list';
import {ResultBoolean} from '../models/result-boolean';


/**
 * Payment contracts offer a view to a merchant's contracts,
 * and are used to create payment transactions. S. a. General Contracts.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentContractsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paymentContractsPaymentContractsGet
   */
  static readonly PaymentContractsPaymentContractsGetPath = '/Payment/Contracts';

  /**
   * GET Payment/Contracts.
   *
   * Get a list of payment contracts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContractsPaymentContractsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContractsPaymentContractsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<PaymentContractsList>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContractsService.PaymentContractsPaymentContractsGetPath, 'get');
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
        return r as StrictHttpResponse<PaymentContractsList>;
      })
    );
  }

  /**
   * GET Payment/Contracts.
   *
   * Get a list of payment contracts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContractsPaymentContractsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContractsPaymentContractsGet(params?: {

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
  }): Observable<PaymentContractsList> {

    return this.paymentContractsPaymentContractsGet$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContractsList>) => r.body as PaymentContractsList)
    );
  }

  /**
   * Path part for operation paymentContractsPaymentContractsGetById
   */
  static readonly PaymentContractsPaymentContractsGetByIdPath = '/Payment/Contracts/{paymentContractId}';

  /**
   * GET Payment/Contracts/{paymentContractId}.
   *
   * Get all payment contracts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContractsPaymentContractsGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContractsPaymentContractsGetById$Response(params: {

    /**
     * Search one by provided id
     */
    paymentContractId: string;
  }): Observable<StrictHttpResponse<PaymentContractsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContractsService.PaymentContractsPaymentContractsGetByIdPath, 'get');
    if (params) {
      rb.path('paymentContractId', params.paymentContractId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentContractsProductModel>;
      })
    );
  }

  /**
   * GET Payment/Contracts/{paymentContractId}.
   *
   * Get all payment contracts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContractsPaymentContractsGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContractsPaymentContractsGetById(params: {

    /**
     * Search one by provided id
     */
    paymentContractId: string;
  }): Observable<PaymentContractsProductModel> {

    return this.paymentContractsPaymentContractsGetById$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContractsProductModel>) => r.body as PaymentContractsProductModel)
    );
  }

  /**
   * Path part for operation paymentContractsPaymentContractsIdPaymentMethodsGet
   */
  static readonly PaymentContractsPaymentContractsIdPaymentMethodsGetPath = '/Payment/Contracts/{paymentContractId}/paymentMethods';

  /**
   * GET Payment/Contracts/{paymentContractId}/paymentMethods.
   *
   * Get available payment methods for given contract
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContractsPaymentContractsIdPaymentMethodsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContractsPaymentContractsIdPaymentMethodsGet$Response(params: {

    /**
     * Contract identifier
     */
    paymentContractId: string;
  }): Observable<StrictHttpResponse<StringList>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContractsService.PaymentContractsPaymentContractsIdPaymentMethodsGetPath, 'get');
    if (params) {
      rb.path('paymentContractId', params.paymentContractId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringList>;
      })
    );
  }

  /**
   * GET Payment/Contracts/{paymentContractId}/paymentMethods.
   *
   * Get available payment methods for given contract
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContractsPaymentContractsIdPaymentMethodsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContractsPaymentContractsIdPaymentMethodsGet(params: {

    /**
     * Contract identifier
     */
    paymentContractId: string;
  }): Observable<StringList> {

    return this.paymentContractsPaymentContractsIdPaymentMethodsGet$Response(params).pipe(
      map((r: StrictHttpResponse<StringList>) => r.body as StringList)
    );
  }

  /**
   * Path part for operation paymentContractsClone
   */
  static readonly PaymentContractsClonePath = '/Payment/Contracts/{paymentContractId}/clone';

  /**
   * POST Payment/Contracts/{paymentContractId}/clone.
   *
   * Clone an existing payment contract
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContractsClone()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContractsClone$Response(params: {

    /**
     * Contract identifier
     */
    paymentContractId: string;

    /**
     * Payment contract clone properties
     */
    body?: PaymentContractsDTOClone
  }): Observable<StrictHttpResponse<PaymentContractsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContractsService.PaymentContractsClonePath, 'post');
    if (params) {
      rb.path('paymentContractId', params.paymentContractId, {});
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
        return r as StrictHttpResponse<PaymentContractsProductModel>;
      })
    );
  }

  /**
   * POST Payment/Contracts/{paymentContractId}/clone.
   *
   * Clone an existing payment contract
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContractsClone$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContractsClone(params: {

    /**
     * Contract identifier
     */
    paymentContractId: string;

    /**
     * Payment contract clone properties
     */
    body?: PaymentContractsDTOClone
  }): Observable<PaymentContractsProductModel> {

    return this.paymentContractsClone$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContractsProductModel>) => r.body as PaymentContractsProductModel)
    );
  }

  /**
   * Path part for operation paymentContractsRequestId
   */
  static readonly PaymentContractsRequestIdPath = '/Payment/Contracts/{paymentContractId}/requestId';

  /**
   * POST Payment/Contracts/{paymentContractId}/requestId.
   *
   * This method clones your payment contract, so that you can use this to separate the merchants of your marketplace. (Needs to be activated))
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContractsRequestId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContractsRequestId$Response(params: {

    /**
     * Contract identifier of the parent
     */
    paymentContractId: string;

    /**
     * Payment contract request id properties
     */
    body?: PaymentContractsDTORequestId
  }): Observable<StrictHttpResponse<PaymentContractsRequestIdResult>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContractsService.PaymentContractsRequestIdPath, 'post');
    if (params) {
      rb.path('paymentContractId', params.paymentContractId, {});
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
        return r as StrictHttpResponse<PaymentContractsRequestIdResult>;
      })
    );
  }

  /**
   * POST Payment/Contracts/{paymentContractId}/requestId.
   *
   * This method clones your payment contract, so that you can use this to separate the merchants of your marketplace. (Needs to be activated))
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContractsRequestId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContractsRequestId(params: {

    /**
     * Contract identifier of the parent
     */
    paymentContractId: string;

    /**
     * Payment contract request id properties
     */
    body?: PaymentContractsDTORequestId
  }): Observable<PaymentContractsRequestIdResult> {

    return this.paymentContractsRequestId$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContractsRequestIdResult>) => r.body as PaymentContractsRequestIdResult)
    );
  }

  /**
   * Path part for operation paymentContractsRevokeAccrual
   */
  static readonly PaymentContractsRevokeAccrualPath = '/Payment/Contracts/{paymentContractId}/revokeAccrual';

  /**
   * POST Payment/Contracts/{paymentContractId}/revokeAccrual.
   *
   * Revoke accrual flag for all transactions of given contract
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContractsRevokeAccrual()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContractsRevokeAccrual$Response(params: {

    /**
     * Contract identifier
     */
    paymentContractId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContractsService.PaymentContractsRevokeAccrualPath, 'post');
    if (params) {
      rb.path('paymentContractId', params.paymentContractId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST Payment/Contracts/{paymentContractId}/revokeAccrual.
   *
   * Revoke accrual flag for all transactions of given contract
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContractsRevokeAccrual$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContractsRevokeAccrual(params: {

    /**
     * Contract identifier
     */
    paymentContractId: string;
  }): Observable<void> {

    return this.paymentContractsRevokeAccrual$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paymentContractsUpdateBankAccount
   */
  static readonly PaymentContractsUpdateBankAccountPath = '/Payment/Contracts/{paymentContractId}/updateBankAccount';

  /**
   * POST Payment/Contracts/{paymentContractId}/updateBankAccount.
   *
   * Change the payout bank account of a contract
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContractsUpdateBankAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContractsUpdateBankAccount$Response(params: {

    /**
     * Contract identifier
     */
    paymentContractId: string;

    /**
     * options
     */
    body?: BankAccountDescriptor
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContractsService.PaymentContractsUpdateBankAccountPath, 'post');
    if (params) {
      rb.path('paymentContractId', params.paymentContractId, {});
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
   * POST Payment/Contracts/{paymentContractId}/updateBankAccount.
   *
   * Change the payout bank account of a contract
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContractsUpdateBankAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContractsUpdateBankAccount(params: {

    /**
     * Contract identifier
     */
    paymentContractId: string;

    /**
     * options
     */
    body?: BankAccountDescriptor
  }): Observable<ResultBoolean> {

    return this.paymentContractsUpdateBankAccount$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

}
