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
import {LoyaltyMerchantcardsCardBalanceReceipt} from '../models/loyalty-merchantcards-card-balance-receipt';
import {LoyaltyMerchantcardsDTO} from '../models/loyalty-merchantcards-dto';
import {LoyaltyMerchantcardsDTOCardBalanceReceipt} from '../models/loyalty-merchantcards-dto-card-balance-receipt';
import {LoyaltyMerchantcardsDTOCardsAmount} from '../models/loyalty-merchantcards-dto-cards-amount';
import {LoyaltyMerchantcardsDTOCheckPasscode} from '../models/loyalty-merchantcards-dto-check-passcode';
import {LoyaltyMerchantcardsDTOCsc} from '../models/loyalty-merchantcards-dto-csc';
import {LoyaltyMerchantcardsDTOLock} from '../models/loyalty-merchantcards-dto-lock';
import {LoyaltyMerchantcardsDTONewPasscode} from '../models/loyalty-merchantcards-dto-new-passcode';
import {LoyaltyMerchantcardsDTOResetPasscode} from '../models/loyalty-merchantcards-dto-reset-passcode';
import {LoyaltyMerchantcardsDTOTransaction} from '../models/loyalty-merchantcards-dto-transaction';
import {LoyaltyMerchantcardsDTOValidateMerchantCard} from '../models/loyalty-merchantcards-dto-validate-merchant-card';
import {LoyaltyMerchantcardsList} from '../models/loyalty-merchantcards-list';
import {LoyaltyMerchantcardsProductModel} from '../models/loyalty-merchantcards-product-model';
import {LoyaltyMerchantcardsProductWithReceiptModel} from '../models/loyalty-merchantcards-product-with-receipt-model';
import {LoyaltyMerchantcardsValidateMerchantCard} from '../models/loyalty-merchantcards-validate-merchant-card';
import {VirtualTerminalDataModel} from '../models/virtual-terminal-data-model';
import {ResultBoolean} from '../models/result-boolean';


/**
 * The merchant card is a per-merchant view on a loyalty card.
 * So a secucard loyalty card can be used for more than one merchant, having
 * individual card groups (programmes) and credit.
 *
 * From the perspective of the merchant, one card can have two different forms of
 * credit at the same time, monetary credit and bonus credit, one for money paid
 * in, the other as reward for a revenue. They have different origins and are
 * handled differenty in book-keeping. However, they make virtually no difference
 * to the customer whe he spends it.
 */
@Injectable({
  providedIn: 'root',
})
export class LoyaltyMerchantcardsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loyaltyMerchantCardsGetAll
   */
  static readonly LoyaltyMerchantCardsGetAllPath = '/Loyalty/MerchantCards';

  /**
   * GET Loyalty/MerchantCards.
   *
   * Get a list of loyalty merchant cards
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsList>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsGetAllPath, 'get');
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsList>;
      })
    );
  }

  /**
   * GET Loyalty/MerchantCards.
   *
   * Get a list of loyalty merchant cards
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsGetAll(params?: {

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
  }): Observable<LoyaltyMerchantcardsList> {

    return this.loyaltyMerchantCardsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsList>) => r.body as LoyaltyMerchantcardsList)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsGetOne
   */
  static readonly LoyaltyMerchantCardsGetOnePath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}';

  /**
   * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}.
   *
   * Get loyalty merchant card for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsGetOne$Response(params: {

    /**
     * Search one by provided id
     */
    loyaltyMerchantCardId: string;
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsGetOnePath, 'get');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoyaltyMerchantcardsProductModel>;
      })
    );
  }

  /**
   * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}.
   *
   * Get loyalty merchant card for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsGetOne(params: {

    /**
     * Search one by provided id
     */
    loyaltyMerchantCardId: string;
  }): Observable<LoyaltyMerchantcardsProductModel> {

    return this.loyaltyMerchantCardsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsProductModel>) => r.body as LoyaltyMerchantcardsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsUpdateMerchantCard
   */
  static readonly LoyaltyMerchantCardsUpdateMerchantCardPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}';

  /**
   * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}.
   *
   * Update loyalty merchant card
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsUpdateMerchantCard()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsUpdateMerchantCard$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Loyalty merchant card properties
     */
    body?: LoyaltyMerchantcardsDTO
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsUpdateMerchantCardPath, 'put');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsProductModel>;
      })
    );
  }

  /**
   * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}.
   *
   * Update loyalty merchant card
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsUpdateMerchantCard$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsUpdateMerchantCard(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Loyalty merchant card properties
     */
    body?: LoyaltyMerchantcardsDTO
  }): Observable<LoyaltyMerchantcardsProductModel> {

    return this.loyaltyMerchantCardsUpdateMerchantCard$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsProductModel>) => r.body as LoyaltyMerchantcardsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsUpdateCardGroupOfMerchantCard
   */
  static readonly LoyaltyMerchantCardsUpdateCardGroupOfMerchantCardPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}';

  /**
   * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}.
   *
   * Update loyalty card group
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsUpdateCardGroupOfMerchantCard()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsUpdateCardGroupOfMerchantCard$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Loyalty card group id
     */
    loyaltyCardGroupId: string;
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsUpdateCardGroupOfMerchantCardPath, 'put');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsProductModel>;
      })
    );
  }

  /**
   * PUT Loyalty/MerchantCards/{loyaltyMerchantCardId}/cardgroup/{loyaltyCardGroupId}.
   *
   * Update loyalty card group
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsUpdateCardGroupOfMerchantCard$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsUpdateCardGroupOfMerchantCard(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Loyalty card group id
     */
    loyaltyCardGroupId: string;
  }): Observable<LoyaltyMerchantcardsProductModel> {

    return this.loyaltyMerchantCardsUpdateCardGroupOfMerchantCard$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsProductModel>) => r.body as LoyaltyMerchantcardsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsRegisterCustomer
   */
  static readonly LoyaltyMerchantCardsRegisterCustomerPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer.
   *
   * Register new customer for a card
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsRegisterCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsRegisterCustomer$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Loyalty customer properties
     */
    body?: LoyaltyCustomersDTO
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsRegisterCustomerPath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsProductModel>;
      })
    );
  }

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/registerCustomer.
   *
   * Register new customer for a card
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsRegisterCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsRegisterCustomer(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Loyalty customer properties
     */
    body?: LoyaltyCustomersDTO
  }): Observable<LoyaltyMerchantcardsProductModel> {

    return this.loyaltyMerchantCardsRegisterCustomer$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsProductModel>) => r.body as LoyaltyMerchantcardsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsSetCustomer
   */
  static readonly LoyaltyMerchantCardsSetCustomerPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}.
   *
   * Set loyalty customer for a loyalty merchant card
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsSetCustomer()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsSetCustomer$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Loyalty customer id
     */
    loyaltyCustomerId: string;
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsSetCustomerPath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsProductModel>;
      })
    );
  }

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/setCustomer/{loyaltyCustomerId}.
   *
   * Set loyalty customer for a loyalty merchant card
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsSetCustomer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsSetCustomer(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Loyalty customer id
     */
    loyaltyCustomerId: string;
  }): Observable<LoyaltyMerchantcardsProductModel> {

    return this.loyaltyMerchantCardsSetCustomer$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsProductModel>) => r.body as LoyaltyMerchantcardsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsGetLock
   */
  static readonly LoyaltyMerchantCardsGetLockPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock';

  /**
   * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock.
   *
   * Get loyalty merchant card lock information for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsGetLock()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsGetLock$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsDTOLock>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsGetLockPath, 'get');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoyaltyMerchantcardsDTOLock>;
      })
    );
  }

  /**
   * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock.
   *
   * Get loyalty merchant card lock information for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsGetLock$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsGetLock(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;
  }): Observable<LoyaltyMerchantcardsDTOLock> {

    return this.loyaltyMerchantCardsGetLock$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsDTOLock>) => r.body as LoyaltyMerchantcardsDTOLock)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsLock
   */
  static readonly LoyaltyMerchantCardsLockPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock.
   *
   * Lock merchant card
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsLock()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsLock$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about lock
     */
    body?: LoyaltyMerchantcardsDTOLock
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsLockPath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsProductModel>;
      })
    );
  }

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/lock.
   *
   * Lock merchant card
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsLock$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsLock(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about lock
     */
    body?: LoyaltyMerchantcardsDTOLock
  }): Observable<LoyaltyMerchantcardsProductModel> {

    return this.loyaltyMerchantCardsLock$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsProductModel>) => r.body as LoyaltyMerchantcardsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsUnlock
   */
  static readonly LoyaltyMerchantCardsUnlockPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock.
   *
   * Unlock merchant card
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsUnlock()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsUnlock$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about unlock
     */
    body?: LoyaltyMerchantcardsDTOLock
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsUnlockPath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsProductModel>;
      })
    );
  }

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/unlock.
   *
   * Unlock merchant card
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsUnlock$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsUnlock(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about unlock
     */
    body?: LoyaltyMerchantcardsDTOLock
  }): Observable<LoyaltyMerchantcardsProductModel> {

    return this.loyaltyMerchantCardsUnlock$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsProductModel>) => r.body as LoyaltyMerchantcardsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsGetVirtualTerminalData
   */
  static readonly LoyaltyMerchantCardsGetVirtualTerminalDataPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}';

  /**
   * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}.
   *
   * Get virtual terminal data for merchant
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsGetVirtualTerminalData()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsGetVirtualTerminalData$Response(params: {

    /**
     * Merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Merchant id
     */
    loyaltyMerchantId: string;
  }): Observable<StrictHttpResponse<VirtualTerminalDataModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsGetVirtualTerminalDataPath, 'get');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
      rb.path('loyaltyMerchantId', params.loyaltyMerchantId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VirtualTerminalDataModel>;
      })
    );
  }

  /**
   * GET Loyalty/MerchantCards/{loyaltyMerchantCardId}/virtualTerminalData/{loyaltyMerchantId}.
   *
   * Get virtual terminal data for merchant
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsGetVirtualTerminalData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyMerchantCardsGetVirtualTerminalData(params: {

    /**
     * Merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Merchant id
     */
    loyaltyMerchantId: string;
  }): Observable<VirtualTerminalDataModel> {

    return this.loyaltyMerchantCardsGetVirtualTerminalData$Response(params).pipe(
      map((r: StrictHttpResponse<VirtualTerminalDataModel>) => r.body as VirtualTerminalDataModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsExecuteTransaction
   */
  static readonly LoyaltyMerchantCardsExecuteTransactionPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction.
   *
   * Execute transaction from SDK
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsExecuteTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsExecuteTransaction$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Transaction properties
     */
    body?: LoyaltyMerchantcardsDTOTransaction
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsProductWithReceiptModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsExecuteTransactionPath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsProductWithReceiptModel>;
      })
    );
  }

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/transaction.
   *
   * Execute transaction from SDK
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsExecuteTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsExecuteTransaction(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Transaction properties
     */
    body?: LoyaltyMerchantcardsDTOTransaction
  }): Observable<LoyaltyMerchantcardsProductWithReceiptModel> {

    return this.loyaltyMerchantCardsExecuteTransaction$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsProductWithReceiptModel>) => r.body as LoyaltyMerchantcardsProductWithReceiptModel)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsCheckCsc
   */
  static readonly LoyaltyMerchantCardsCheckCscPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc.
   *
   * Check CSC
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsCheckCsc()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsCheckCsc$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTOCsc
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsCheckCscPath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkCsc.
   *
   * Check CSC
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsCheckCsc$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsCheckCsc(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTOCsc
  }): Observable<ResultBoolean> {

    return this.loyaltyMerchantCardsCheckCsc$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsValidateMerchantCard
   */
  static readonly LoyaltyMerchantCardsValidateMerchantCardPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard.
   *
   * Function to check the merchant card
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsValidateMerchantCard()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsValidateMerchantCard$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTOValidateMerchantCard
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsValidateMerchantCard>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsValidateMerchantCardPath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsValidateMerchantCard>;
      })
    );
  }

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/validateMerchantcard.
   *
   * Function to check the merchant card
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsValidateMerchantCard$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsValidateMerchantCard(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTOValidateMerchantCard
  }): Observable<LoyaltyMerchantcardsValidateMerchantCard> {

    return this.loyaltyMerchantCardsValidateMerchantCard$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsValidateMerchantCard>) => r.body as LoyaltyMerchantcardsValidateMerchantCard)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsNewPassCode
   */
  static readonly LoyaltyMerchantCardsNewPassCodePath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode.
   *
   * Function to save new given passcode for given merchantcard identified by cardnumber
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsNewPassCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsNewPassCode$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTONewPasscode
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsNewPassCodePath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/newPasscode.
   *
   * Function to save new given passcode for given merchantcard identified by cardnumber
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsNewPassCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsNewPassCode(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTONewPasscode
  }): Observable<ResultBoolean> {

    return this.loyaltyMerchantCardsNewPassCode$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsResetPassCode
   */
  static readonly LoyaltyMerchantCardsResetPassCodePath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode.
   *
   * Function to reset a passcode for given merchantcard
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsResetPassCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsResetPassCode$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTOResetPasscode
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsResetPassCodePath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/resetPasscode.
   *
   * Function to reset a passcode for given merchantcard
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsResetPassCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsResetPassCode(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTOResetPasscode
  }): Observable<ResultBoolean> {

    return this.loyaltyMerchantCardsResetPassCode$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsCheckPassCode
   */
  static readonly LoyaltyMerchantCardsCheckPassCodePath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode.
   *
   * Function to check the Passcode card with cardnumber
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsCheckPassCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsCheckPassCode$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTOCheckPasscode
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsCheckPassCodePath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/checkPasscode.
   *
   * Function to check the Passcode card with cardnumber
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsCheckPassCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsCheckPassCode(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card
     */
    body?: LoyaltyMerchantcardsDTOCheckPasscode
  }): Observable<ResultBoolean> {

    return this.loyaltyMerchantCardsCheckPassCode$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsCreateMerchantcards
   */
  static readonly LoyaltyMerchantCardsCreateMerchantcardsPath = '/Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}';

  /**
   * POST Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}.
   *
   * Function to create multiple merchantcards for given merchant with given cardgroup
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsCreateMerchantcards()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsCreateMerchantcards$Response(params: {

    /**
     * General merchant id
     */
    generalMerchantId: string;

    /**
     * Loyalty card group id
     */
    loyaltyCardgroupId: string;

    /**
     * Cards amount
     */
    body?: LoyaltyMerchantcardsDTOCardsAmount
  }): Observable<StrictHttpResponse<Array<LoyaltyMerchantcardsProductModel>>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsCreateMerchantcardsPath, 'post');
    if (params) {
      rb.path('generalMerchantId', params.generalMerchantId, {});
      rb.path('loyaltyCardgroupId', params.loyaltyCardgroupId, {});
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
        return r as StrictHttpResponse<Array<LoyaltyMerchantcardsProductModel>>;
      })
    );
  }

  /**
   * POST Loyalty/MerchantCards/{generalMerchantId}/createMerchantcards/{loyaltyCardgroupId}.
   *
   * Function to create multiple merchantcards for given merchant with given cardgroup
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsCreateMerchantcards$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsCreateMerchantcards(params: {

    /**
     * General merchant id
     */
    generalMerchantId: string;

    /**
     * Loyalty card group id
     */
    loyaltyCardgroupId: string;

    /**
     * Cards amount
     */
    body?: LoyaltyMerchantcardsDTOCardsAmount
  }): Observable<Array<LoyaltyMerchantcardsProductModel>> {

    return this.loyaltyMerchantCardsCreateMerchantcards$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LoyaltyMerchantcardsProductModel>>) => r.body as Array<LoyaltyMerchantcardsProductModel>)
    );
  }

  /**
   * Path part for operation loyaltyMerchantCardsCardBalanceReceipt
   */
  static readonly LoyaltyMerchantCardsCardBalanceReceiptPath = '/Loyalty/MerchantCards/{loyaltyMerchantCardId}/getCardBalanceReceipt';

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/getCardBalanceReceipt.
   *
   * Get card balance receipt and information about limit data and passcode protection
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyMerchantCardsCardBalanceReceipt()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsCardBalanceReceipt$Response(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card & current terminal
     */
    body?: LoyaltyMerchantcardsDTOCardBalanceReceipt
  }): Observable<StrictHttpResponse<LoyaltyMerchantcardsCardBalanceReceipt>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyMerchantcardsService.LoyaltyMerchantCardsCardBalanceReceiptPath, 'post');
    if (params) {
      rb.path('loyaltyMerchantCardId', params.loyaltyMerchantCardId, {});
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
        return r as StrictHttpResponse<LoyaltyMerchantcardsCardBalanceReceipt>;
      })
    );
  }

  /**
   * POST Loyalty/MerchantCards/{loyaltyMerchantCardId}/getCardBalanceReceipt.
   *
   * Get card balance receipt and information about limit data and passcode protection
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyMerchantCardsCardBalanceReceipt$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyMerchantCardsCardBalanceReceipt(params: {

    /**
     * Loyalty merchant card id
     */
    loyaltyMerchantCardId: string;

    /**
     * Information about card & current terminal
     */
    body?: LoyaltyMerchantcardsDTOCardBalanceReceipt
  }): Observable<LoyaltyMerchantcardsCardBalanceReceipt> {

    return this.loyaltyMerchantCardsCardBalanceReceipt$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyMerchantcardsCardBalanceReceipt>) => r.body as LoyaltyMerchantcardsCardBalanceReceipt)
    );
  }

}
