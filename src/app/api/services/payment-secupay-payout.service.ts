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

import {SecupayPayoutDTO} from '../models/secupay-payout-dto';
import {SecupayPayoutProductModel} from '../models/secupay-payout-product-model';


/**
 * A convenient way to create a payout transaction. Payouts
 * are payments paid by a merchant and received by his customers. S. a. Payment
 * Transactions.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentSecupayPayoutService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paymentSecupaypayoutGetSecupaypayout
   */
  static readonly PaymentSecupaypayoutGetSecupaypayoutPath = '/Payment/Secupaypayout/{paymentPayoutId}';

  /**
   * GET Payment/Secupaypayout/{paymentPayoutId}.
   *
   * Get the details of a payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentSecupaypayoutGetSecupaypayout()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentSecupaypayoutGetSecupaypayout$Response(params: {

    /**
     * Payment payout id
     */
    paymentPayoutId: string;
  }): Observable<StrictHttpResponse<SecupayPayoutProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupayPayoutService.PaymentSecupaypayoutGetSecupaypayoutPath, 'get');
    if (params) {
      rb.path('paymentPayoutId', params.paymentPayoutId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecupayPayoutProductModel>;
      })
    );
  }

  /**
   * GET Payment/Secupaypayout/{paymentPayoutId}.
   *
   * Get the details of a payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentSecupaypayoutGetSecupaypayout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentSecupaypayoutGetSecupaypayout(params: {

    /**
     * Payment payout id
     */
    paymentPayoutId: string;
  }): Observable<SecupayPayoutProductModel> {

    return this.paymentSecupaypayoutGetSecupaypayout$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayPayoutProductModel>) => r.body as SecupayPayoutProductModel)
    );
  }

  /**
   * Path part for operation paymentSecupaypayoutPaymentSecupaypayoutPost
   */
  static readonly PaymentSecupaypayoutPaymentSecupaypayoutPostPath = '/Payment/Secupaypayout';

  /**
   * POST Payment/Secupaypayout.
   *
   * Start a payout transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentSecupaypayoutPaymentSecupaypayoutPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentSecupaypayoutPaymentSecupaypayoutPost$Response(params?: {

    /**
     * Payout payment transaction input properties
     */
    body?: SecupayPayoutDTO
  }): Observable<StrictHttpResponse<SecupayPayoutProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupayPayoutService.PaymentSecupaypayoutPaymentSecupaypayoutPostPath, 'post');
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
        return r as StrictHttpResponse<SecupayPayoutProductModel>;
      })
    );
  }

  /**
   * POST Payment/Secupaypayout.
   *
   * Start a payout transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentSecupaypayoutPaymentSecupaypayoutPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentSecupaypayoutPaymentSecupaypayoutPost(params?: {

    /**
     * Payout payment transaction input properties
     */
    body?: SecupayPayoutDTO
  }): Observable<SecupayPayoutProductModel> {

    return this.paymentSecupaypayoutPaymentSecupaypayoutPost$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayPayoutProductModel>) => r.body as SecupayPayoutProductModel)
    );
  }

}
