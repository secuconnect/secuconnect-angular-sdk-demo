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

import {MandateDTO} from '../models/mandate-dto';
import {MandateProductModel} from '../models/mandate-product-model';
import {PaymentContainersDTO} from '../models/payment-containers-dto';
import {PaymentContainersList} from '../models/payment-containers-list';
import {PaymentContainersProductModel} from '../models/payment-containers-product-model';
import {UploadMandateDTO} from '../models/upload-mandate-dto';
import {UploadMandateProductModel} from '../models/upload-mandate-product-model';


/**
 * Payment containers save payment instrument, holding either
 * a credit card, or a bank account used for SEPA direct debit. Payment containers
 * belong to payment customers, and cannot be used independently.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentContainersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paymentContainersPaymentContainersGet
   */
  static readonly PaymentContainersPaymentContainersGetPath = '/Payment/Containers';

  /**
   * GET Payment/Containers.
   *
   * Get a list of payment containers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentContainersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<PaymentContainersList>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersPaymentContainersGetPath, 'get');
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
        return r as StrictHttpResponse<PaymentContainersList>;
      })
    );
  }

  /**
   * GET Payment/Containers.
   *
   * Get a list of payment containers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentContainersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersGet(params?: {

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
  }): Observable<PaymentContainersList> {

    return this.paymentContainersPaymentContainersGet$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContainersList>) => r.body as PaymentContainersList)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentContainersPost
   */
  static readonly PaymentContainersPaymentContainersPostPath = '/Payment/Containers';

  /**
   * POST Payment/Containers.
   *
   * Add new containers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentContainersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentContainersPost$Response(params?: {

    /**
     * Payment container properties
     */
    body?: PaymentContainersDTO
  }): Observable<StrictHttpResponse<PaymentContainersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersPaymentContainersPostPath, 'post');
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
        return r as StrictHttpResponse<PaymentContainersProductModel>;
      })
    );
  }

  /**
   * POST Payment/Containers.
   *
   * Add new containers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentContainersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentContainersPost(params?: {

    /**
     * Payment container properties
     */
    body?: PaymentContainersDTO
  }): Observable<PaymentContainersProductModel> {

    return this.paymentContainersPaymentContainersPost$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContainersProductModel>) => r.body as PaymentContainersProductModel)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentContainersGetById
   */
  static readonly PaymentContainersPaymentContainersGetByIdPath = '/Payment/Containers/{paymentContainerId}';

  /**
   * GET Payment/Containers/{paymentContainerId}.
   *
   * Get all payment containers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentContainersGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersGetById$Response(params: {

    /**
     * Search one by provided id
     */
    paymentContainerId: string;
  }): Observable<StrictHttpResponse<PaymentContainersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersPaymentContainersGetByIdPath, 'get');
    if (params) {
      rb.path('paymentContainerId', params.paymentContainerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentContainersProductModel>;
      })
    );
  }

  /**
   * GET Payment/Containers/{paymentContainerId}.
   *
   * Get all payment containers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentContainersGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersGetById(params: {

    /**
     * Search one by provided id
     */
    paymentContainerId: string;
  }): Observable<PaymentContainersProductModel> {

    return this.paymentContainersPaymentContainersGetById$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContainersProductModel>) => r.body as PaymentContainersProductModel)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentContainersIdPut
   */
  static readonly PaymentContainersPaymentContainersIdPutPath = '/Payment/Containers/{paymentContainerId}';

  /**
   * PUT Payment/Containers/{paymentContainerId}.
   *
   * Update payment container
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentContainersIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentContainersIdPut$Response(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Payment container properties
     */
    body?: PaymentContainersDTO
  }): Observable<StrictHttpResponse<PaymentContainersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersPaymentContainersIdPutPath, 'put');
    if (params) {
      rb.path('paymentContainerId', params.paymentContainerId, {});
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
        return r as StrictHttpResponse<PaymentContainersProductModel>;
      })
    );
  }

  /**
   * PUT Payment/Containers/{paymentContainerId}.
   *
   * Update payment container
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentContainersIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersPaymentContainersIdPut(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Payment container properties
     */
    body?: PaymentContainersDTO
  }): Observable<PaymentContainersProductModel> {

    return this.paymentContainersPaymentContainersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContainersProductModel>) => r.body as PaymentContainersProductModel)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentContainersIdDelete
   */
  static readonly PaymentContainersPaymentContainersIdDeletePath = '/Payment/Containers/{paymentContainerId}';

  /**
   * DELETE Payment/Containers/{paymentContainerId}.
   *
   * Delete payment container
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentContainersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersIdDelete$Response(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;
  }): Observable<StrictHttpResponse<Array<PaymentContainersProductModel>>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersPaymentContainersIdDeletePath, 'delete');
    if (params) {
      rb.path('paymentContainerId', params.paymentContainerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaymentContainersProductModel>>;
      })
    );
  }

  /**
   * DELETE Payment/Containers/{paymentContainerId}.
   *
   * Delete payment container
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentContainersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersIdDelete(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;
  }): Observable<Array<PaymentContainersProductModel>> {

    return this.paymentContainersPaymentContainersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PaymentContainersProductModel>>) => r.body as Array<PaymentContainersProductModel>)
    );
  }

  /**
   * Path part for operation paymentContainersUploadMandate
   */
  static readonly PaymentContainersUploadMandatePath = '/Payment/Containers/{paymentContainerId}/Uploadmandate';

  /**
   * POST Payment/Containers/<id>/Uploadmandate.
   *
   * Submit a signed B2B mandate
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersUploadMandate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersUploadMandate$Response(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Signed B2B mandate properties
     */
    body?: UploadMandateDTO
  }): Observable<StrictHttpResponse<UploadMandateProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersUploadMandatePath, 'post');
    if (params) {
      rb.path('paymentContainerId', params.paymentContainerId, {});
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
        return r as StrictHttpResponse<UploadMandateProductModel>;
      })
    );
  }

  /**
   * POST Payment/Containers/<id>/Uploadmandate.
   *
   * Submit a signed B2B mandate
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersUploadMandate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersUploadMandate(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Signed B2B mandate properties
     */
    body?: UploadMandateDTO
  }): Observable<UploadMandateProductModel> {

    return this.paymentContainersUploadMandate$Response(params).pipe(
      map((r: StrictHttpResponse<UploadMandateProductModel>) => r.body as UploadMandateProductModel)
    );
  }

  /**
   * Path part for operation paymentContainersMandate
   */
  static readonly PaymentContainersMandatePath = '/Payment/Containers/{paymentContainerId}/mandate';

  /**
   * POST Payment/Containers/<id>/mandate.
   *
   * Get an B2B mandate form
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersMandate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersMandate$Response(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Get an B2B mandate form properties
     */
    body?: MandateDTO
  }): Observable<StrictHttpResponse<MandateProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersMandatePath, 'post');
    if (params) {
      rb.path('paymentContainerId', params.paymentContainerId, {});
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
        return r as StrictHttpResponse<MandateProductModel>;
      })
    );
  }

  /**
   * POST Payment/Containers/<id>/mandate.
   *
   * Get an B2B mandate form
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersMandate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentContainersMandate(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Get an B2B mandate form properties
     */
    body?: MandateDTO
  }): Observable<MandateProductModel> {

    return this.paymentContainersMandate$Response(params).pipe(
      map((r: StrictHttpResponse<MandateProductModel>) => r.body as MandateProductModel)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentContainersIdAssignSecondaryIdPost
   */
  static readonly PaymentContainersPaymentContainersIdAssignSecondaryIdPostPath = '/Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}';

  /**
   * POST Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}.
   *
   * Assign an existing payment container to ...
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentContainersIdAssignSecondaryIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersIdAssignSecondaryIdPost$Response(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Id to which container will be assigned
     */
    secondaryPaymentContainerId: string;
  }): Observable<StrictHttpResponse<PaymentContainersProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersPaymentContainersIdAssignSecondaryIdPostPath, 'post');
    if (params) {
      rb.path('paymentContainerId', params.paymentContainerId, {});
      rb.path('secondaryPaymentContainerId', params.secondaryPaymentContainerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaymentContainersProductModel>;
      })
    );
  }

  /**
   * POST Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}.
   *
   * Assign an existing payment container to ...
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentContainersIdAssignSecondaryIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersIdAssignSecondaryIdPost(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Id to which container will be assigned
     */
    secondaryPaymentContainerId: string;
  }): Observable<PaymentContainersProductModel> {

    return this.paymentContainersPaymentContainersIdAssignSecondaryIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentContainersProductModel>) => r.body as PaymentContainersProductModel)
    );
  }

  /**
   * Path part for operation paymentContainersPaymentContainersIdAssignSecondaryIdDelete
   */
  static readonly PaymentContainersPaymentContainersIdAssignSecondaryIdDeletePath = '/Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}';

  /**
   * DELETE Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}.
   *
   * Removes an existing payment container assignment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentContainersPaymentContainersIdAssignSecondaryIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersIdAssignSecondaryIdDelete$Response(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Id for which container is currently assigned to
     */
    secondaryPaymentContainerId: string;
  }): Observable<StrictHttpResponse<Array<PaymentContainersProductModel>>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentContainersService.PaymentContainersPaymentContainersIdAssignSecondaryIdDeletePath, 'delete');
    if (params) {
      rb.path('paymentContainerId', params.paymentContainerId, {});
      rb.path('secondaryPaymentContainerId', params.secondaryPaymentContainerId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaymentContainersProductModel>>;
      })
    );
  }

  /**
   * DELETE Payment/Containers/{paymentContainerId}/assign/{secondaryPaymentContainerId}.
   *
   * Removes an existing payment container assignment
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentContainersPaymentContainersIdAssignSecondaryIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentContainersPaymentContainersIdAssignSecondaryIdDelete(params: {

    /**
     * Payment container id
     */
    paymentContainerId: string;

    /**
     * Id for which container is currently assigned to
     */
    secondaryPaymentContainerId: string;
  }): Observable<Array<PaymentContainersProductModel>> {

    return this.paymentContainersPaymentContainersIdAssignSecondaryIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PaymentContainersProductModel>>) => r.body as Array<PaymentContainersProductModel>)
    );
  }

}
