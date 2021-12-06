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

import {PaymentPlansDTO} from '../models/payment-plans-dto';
import {PaymentPlansList} from '../models/payment-plans-list';
import {PaymentPlansProductModel} from '../models/payment-plans-product-model';

@Injectable({
  providedIn: 'root',
})
export class PaymentPlansService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paymentContainersPaymentPlansGet
   */
  static readonly PaymentContainersPaymentPlansGetPath = '/Payment/Plans';

  /**
   * GET Payment/Plans.
   *
   * Get a list of payment plans
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentPlansGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentPlansGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<PaymentPlansList>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentPlansService.PaymentContainersPaymentPlansGetPath, 'get');
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
        return r as StrictHttpResponse<PaymentPlansList>;
      })
    );
  }

  /**
   * GET Payment/Plans.
   *
   * Get a list of payment plans
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentPlansGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentPlansGet(params?: {

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
  }): Observable<PaymentPlansList> {

    return this.paymentContainersPaymentPlansGet$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentPlansList>) => r.body as PaymentPlansList)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentPlansPost
   */
  static readonly PaymentContainersPaymentPlansPostPath = '/Payment/Plans';

  /**
   * POST Payment/Plans.
   *
   * Add new plan
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentPlansPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentPlansPost$Response(params?: {

    /**
     * Payment plan properties
     */
    body?: PaymentPlansDTO
  }): Observable<StrictHttpResponse<PaymentPlansProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentPlansService.PaymentContainersPaymentPlansPostPath, 'post');
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
        return r as StrictHttpResponse<PaymentPlansProductModel>;
      })
    );
  }

  /**
   * POST Payment/Plans.
   *
   * Add new plan
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentPlansPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentPlansPost(params?: {

    /**
     * Payment plan properties
     */
    body?: PaymentPlansDTO
  }): Observable<PaymentPlansProductModel> {

    return this.paymentContainersPaymentPlansPost$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentPlansProductModel>) => r.body as PaymentPlansProductModel)
    );
  }

  /**
   * Path part for operation paymentPlansPaymentPlansGetById
   */
  static readonly PaymentPlansPaymentPlansGetByIdPath = '/Payment/Plans/{paymentPlanId}';

  /**
   * GET Payment/Plans/{paymentPlanId}.
   *
   * Get payment plan by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentPlansPaymentPlansGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentPlansPaymentPlansGetById$Response(params: {

    /**
     * Payment plan id
     */
    paymentPlanId: string;
  }): Observable<StrictHttpResponse<PaymentPlansProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentPlansService.PaymentPlansPaymentPlansGetByIdPath, 'get');
    if (params) {
      rb.path('paymentPlanId', params.paymentPlanId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentPlansProductModel>;
      })
    );
  }

  /**
   * GET Payment/Plans/{paymentPlanId}.
   *
   * Get payment plan by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentPlansPaymentPlansGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentPlansPaymentPlansGetById(params: {

    /**
     * Payment plan id
     */
    paymentPlanId: string;
  }): Observable<PaymentPlansProductModel> {

    return this.paymentPlansPaymentPlansGetById$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentPlansProductModel>) => r.body as PaymentPlansProductModel)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentPlansPut
   */
  static readonly PaymentContainersPaymentPlansPutPath = '/Payment/Plans/{paymentPlanId}';

  /**
   * PUT Payment/Plans/{paymentPlanId}.
   *
   * Updates an existing plan
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentPlansPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentPlansPut$Response(params: {

    /**
     * Payment plan id
     */
    paymentPlanId: string;

    /**
     * Payment plans properties
     */
    body?: PaymentPlansDTO
  }): Observable<StrictHttpResponse<PaymentPlansProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentPlansService.PaymentContainersPaymentPlansPutPath, 'put');
    if (params) {
      rb.path('paymentPlanId', params.paymentPlanId, {});
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
        return r as StrictHttpResponse<PaymentPlansProductModel>;
      })
    );
  }

  /**
   * PUT Payment/Plans/{paymentPlanId}.
   *
   * Updates an existing plan
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentPlansPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentPlansPut(params: {

    /**
     * Payment plan id
     */
    paymentPlanId: string;

    /**
     * Payment plans properties
     */
    body?: PaymentPlansDTO
  }): Observable<PaymentPlansProductModel> {

    return this.paymentContainersPaymentPlansPut$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentPlansProductModel>) => r.body as PaymentPlansProductModel)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentPlansPatch
   */
  static readonly PaymentContainersPaymentPlansPatchPath = '/Payment/Plans/{paymentPlanId}';

  /**
   * PATCH Payment/Plans/{paymentPlanId}.
   *
   * Updates an existing plan (partial)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentPlansPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentPlansPatch$Response(params: {

    /**
     * Payment plan id
     */
    paymentPlanId: string;

    /**
     * Payment plans properties
     */
    body?: PaymentPlansDTO
  }): Observable<StrictHttpResponse<PaymentPlansProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentPlansService.PaymentContainersPaymentPlansPatchPath, 'patch');
    if (params) {
      rb.path('paymentPlanId', params.paymentPlanId, {});
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
        return r as StrictHttpResponse<PaymentPlansProductModel>;
      })
    );
  }

  /**
   * PATCH Payment/Plans/{paymentPlanId}.
   *
   * Updates an existing plan (partial)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentPlansPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentPlansPatch(params: {

    /**
     * Payment plan id
     */
    paymentPlanId: string;

    /**
     * Payment plans properties
     */
    body?: PaymentPlansDTO
  }): Observable<PaymentPlansProductModel> {

    return this.paymentContainersPaymentPlansPatch$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentPlansProductModel>) => r.body as PaymentPlansProductModel)
    );
  }

}
