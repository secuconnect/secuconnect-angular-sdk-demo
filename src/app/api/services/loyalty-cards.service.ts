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

import {CardPin} from '../models/card-pin';
import {LoyaltyCardsList} from '../models/loyalty-cards-list';
import {LoyaltyCardsProductModel} from '../models/loyalty-cards-product-model';
import {ResultBoolean} from '../models/result-boolean';


/**
 * A secucard loyalty card is a physical or virtual card,
 * identified by its card number. It is rather the customer's view on the card.
 * One card can be used for multiple merchants. See merchant card for more
 * information.
 */
@Injectable({
  providedIn: 'root',
})
export class LoyaltyCardsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loyaltyCardsGetAll
   */
  static readonly LoyaltyCardsGetAllPath = '/Loyalty/Cards';

  /**
   * GET Loyalty/Cards.
   *
   * Get a list of loyalty cards
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardsGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<LoyaltyCardsList>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardsService.LoyaltyCardsGetAllPath, 'get');
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
        return r as StrictHttpResponse<LoyaltyCardsList>;
      })
    );
  }

  /**
   * GET Loyalty/Cards.
   *
   * Get a list of loyalty cards
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardsGetAll(params?: {

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
  }): Observable<LoyaltyCardsList> {

    return this.loyaltyCardsGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCardsList>) => r.body as LoyaltyCardsList)
    );
  }

  /**
   * Path part for operation loyaltyCardsGetOne
   */
  static readonly LoyaltyCardsGetOnePath = '/Loyalty/Cards/{loyaltyCardId}';

  /**
   * GET Loyalty/Cards/{loyaltyCardId}.
   *
   * Get loyalty card for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardsGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardsGetOne$Response(params: {

    /**
     * Search one loyalty card by provided id
     */
    loyaltyCardId: string;
  }): Observable<StrictHttpResponse<LoyaltyCardsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardsService.LoyaltyCardsGetOnePath, 'get');
    if (params) {
      rb.path('loyaltyCardId', params.loyaltyCardId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoyaltyCardsProductModel>;
      })
    );
  }

  /**
   * GET Loyalty/Cards/{loyaltyCardId}.
   *
   * Get loyalty card for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardsGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardsGetOne(params: {

    /**
     * Search one loyalty card by provided id
     */
    loyaltyCardId: string;
  }): Observable<LoyaltyCardsProductModel> {

    return this.loyaltyCardsGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<LoyaltyCardsProductModel>) => r.body as LoyaltyCardsProductModel)
    );
  }

  /**
   * Path part for operation loyaltyCardsAssignUser
   */
  static readonly LoyaltyCardsAssignUserPath = '/Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}';

  /**
   * POST Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}.
   *
   * Assign loyalty card to specific user account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardsAssignUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCardsAssignUser$Response(params: {

    /**
     * Loyalty card id
     */
    loyaltyCardId: string;

    /**
     * General account id
     */
    generalAccountId: string;

    /**
     * Loyalty card pin for the specific card
     */
    body?: CardPin
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardsService.LoyaltyCardsAssignUserPath, 'post');
    if (params) {
      rb.path('loyaltyCardId', params.loyaltyCardId, {});
      rb.path('generalAccountId', params.generalAccountId, {});
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
   * POST Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}.
   *
   * Assign loyalty card to specific user account
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardsAssignUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loyaltyCardsAssignUser(params: {

    /**
     * Loyalty card id
     */
    loyaltyCardId: string;

    /**
     * General account id
     */
    generalAccountId: string;

    /**
     * Loyalty card pin for the specific card
     */
    body?: CardPin
  }): Observable<ResultBoolean> {

    return this.loyaltyCardsAssignUser$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

  /**
   * Path part for operation loyaltyCardsRemoveAssignedUser
   */
  static readonly LoyaltyCardsRemoveAssignedUserPath = '/Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}';

  /**
   * DELETE Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}.
   *
   * Remove assigned loyalty card from specific user account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loyaltyCardsRemoveAssignedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardsRemoveAssignedUser$Response(params: {

    /**
     * Loyalty card id
     */
    loyaltyCardId: string;

    /**
     * General account id
     */
    generalAccountId: string;
  }): Observable<StrictHttpResponse<ResultBoolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoyaltyCardsService.LoyaltyCardsRemoveAssignedUserPath, 'delete');
    if (params) {
      rb.path('loyaltyCardId', params.loyaltyCardId, {});
      rb.path('generalAccountId', params.generalAccountId, {});
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
   * DELETE Loyalty/Cards/{loyaltyCardId}/assignUser/{generalAccountId}.
   *
   * Remove assigned loyalty card from specific user account
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loyaltyCardsRemoveAssignedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loyaltyCardsRemoveAssignedUser(params: {

    /**
     * Loyalty card id
     */
    loyaltyCardId: string;

    /**
     * General account id
     */
    generalAccountId: string;
  }): Observable<ResultBoolean> {

    return this.loyaltyCardsRemoveAssignedUser$Response(params).pipe(
      map((r: StrictHttpResponse<ResultBoolean>) => r.body as ResultBoolean)
    );
  }

}
