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
import {GeneralContractsList} from '../models/general-contracts-list';
import {GeneralContractsProductModel} from '../models/general-contracts-product-model';
import {GetAvailablePaymentMethodsDTO} from '../models/get-available-payment-methods-dto';
import {ResultBoolean} from '../models/result-boolean';
import {TokenService} from "../token-service";


/**
 * Manages the contracts of a merchant, including the specific
 * options and conditions. A merchant can have one contract, but also multiple
 * contracts for different purposes. There are separate views on the contracts for
 * payment (s. Payment Contracts) and e-goods (s. Prepaid Contracts).
 */
@Injectable({
  providedIn: 'root',
})
export class GeneralContractsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation generalContractsGetAll
   */
  static readonly GeneralContractsGetAllPath = '/General/Contracts';

  /**
   * GET General/Contracts.
   *
   * Get a list of general contracts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalContractsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalContractsGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<GeneralContractsList>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralContractsService.GeneralContractsGetAllPath, 'get');
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
        return r as StrictHttpResponse<GeneralContractsList>;
      })
    );
  }

  /**
   * GET General/Contracts.
   *
   * Get a list of general contracts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalContractsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalContractsGetAll(params?: {

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
  }): Observable<GeneralContractsList> {

    return this.generalContractsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralContractsList>) => r.body as GeneralContractsList)
    );
  }

  /**
   * Path part for operation generalContractsGetOne
   */
  static readonly GeneralContractsGetOnePath = '/General/Contracts/{generalContractId}';

  /**
   * GET General/Contracts/{generalContractId}.
   *
   * Get one general contract for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalContractsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalContractsGetOne$Response(params: {

    /**
     * General contract id
     */
    generalContractId: string;
  }): Observable<StrictHttpResponse<GeneralContractsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralContractsService.GeneralContractsGetOnePath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<GeneralContractsProductModel>;
      })
    );
  }

  /**
   * GET General/Contracts/{generalContractId}.
   *
   * Get one general contract for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalContractsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalContractsGetOne(params: {

    /**
     * General contract id
     */
    generalContractId: string;
  }): Observable<GeneralContractsProductModel> {

    return this.generalContractsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralContractsProductModel>) => r.body as GeneralContractsProductModel)
    );
  }

  /**
   * Path part for operation generalContractsGetAvailablePaymentMethods
   */
  static readonly GeneralContractsGetAvailablePaymentMethodsPath = '/General/Contracts/{generalContractId}/getAvailablePaymentMethods';

  /**
   * POST General/Contracts/{generalContractId}/getAvailablePaymentMethods.
   *
   * Get available payment methods for given contract
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalContractsGetAvailablePaymentMethods()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalContractsGetAvailablePaymentMethods$Response(params: {

    /**
     * Contract identifier
     */
    generalContractId: string;

    /**
     * options
     */
    body?: GetAvailablePaymentMethodsDTO
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralContractsService.GeneralContractsGetAvailablePaymentMethodsPath, 'post');
    if (params) {
      rb.path('generalContractId', params.generalContractId, {});
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
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * POST General/Contracts/{generalContractId}/getAvailablePaymentMethods.
   *
   * Get available payment methods for given contract
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalContractsGetAvailablePaymentMethods$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalContractsGetAvailablePaymentMethods(params: {

    /**
     * Contract identifier
     */
    generalContractId: string;

    /**
     * options
     */
    body?: GetAvailablePaymentMethodsDTO
  }): Observable<Array<string>> {

    return this.generalContractsGetAvailablePaymentMethods$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation generalContractsRevokeAccrual
   */
  static readonly GeneralContractsRevokeAccrualPath = '/General/Contracts/{generalContractId}/revokeAccrual';

  /**
   * POST General/Contracts/{generalContractId}/revokeAccrual.
   *
   * Revoke accrual flag for all transactions of given contract
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalContractsRevokeAccrual()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalContractsRevokeAccrual$Response(params: {

    /**
     * Contract identifier
     */
    generalContractId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralContractsService.GeneralContractsRevokeAccrualPath, 'post');
    if (params) {
      rb.path('generalContractId', params.generalContractId, {});
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
   * POST General/Contracts/{generalContractId}/revokeAccrual.
   *
   * Revoke accrual flag for all transactions of given contract
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalContractsRevokeAccrual$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generalContractsRevokeAccrual(params: {

    /**
     * Contract identifier
     */
    generalContractId: string;
  }): Observable<void> {

    return this.generalContractsRevokeAccrual$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation generalContractsUpdateBankAccount
   */
  static readonly GeneralContractsUpdateBankAccountPath = '/General/Contracts/{generalContractId}/updateBankAccount';

  /**
   * POST General/Contracts/{generalContractId}/updateBankAccount.
   *
   * Change the payout bank account of a contract
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generalContractsUpdateBankAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalContractsUpdateBankAccount$Response(params: {

    /**
     * Contract identifier
     */
    generalContractId: string;

    /**
     * options
     */
    body?: BankAccountDescriptor
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralContractsService.GeneralContractsUpdateBankAccountPath, 'post');
    if (params) {
      rb.path('generalContractId', params.generalContractId, {});
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
   * POST General/Contracts/{generalContractId}/updateBankAccount.
   *
   * Change the payout bank account of a contract
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generalContractsUpdateBankAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generalContractsUpdateBankAccount(params: {

    /**
     * Contract identifier
     */
    generalContractId: string;

    /**
     * options
     */
    body?: BankAccountDescriptor
  }): Observable<ResultBoolean> {

    return this.generalContractsUpdateBankAccount$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

}
