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

import {PaymentCancelResult} from '../models/payment-cancel-result';
import {SecupayTransactionCancelDTO} from '../models/secupay-transaction-cancel-dto';
import {SecupayTransactionCaptureDTO} from '../models/secupay-transaction-capture-dto';
import {SecupayTransactionDTOExternalInvoicePdf} from '../models/secupay-transaction-dto-external-invoice-pdf';
import {SecupayTransactionExternalInvoicePdf} from '../models/secupay-transaction-external-invoice-pdf';
import {SecupayTransactionProductDTO} from '../models/secupay-transaction-product-dto';
import {SecupayTransactionProductModel} from '../models/secupay-transaction-product-model';
import {SecupayTransactionReverseAccrualDTO} from '../models/secupay-transaction-reverse-accrual-dto';
import {SecupayTransactionSetShippingInformationDTO} from '../models/secupay-transaction-set-shipping-information-dto';
import {SecupayTransactionUpdateBasketDTO} from '../models/secupay-transaction-update-basket-dto';


/**
 * A convenient way to create a transaction to be used for
 * Sofortüberweisung. S. a. Payment Transactions.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentSecupaySofortService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation assignExternalInvoicePdf
   */
  static readonly AssignExternalInvoicePdfPath = '/Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}';

  /**
   * POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}.
   *
   * Assign external invoice pdf
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assignExternalInvoicePdf()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  assignExternalInvoicePdf$Response(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Document id
     */
    documentId: string;

    /**
     * Request body for assigning external invoice pdf
     */
    body?: SecupayTransactionDTOExternalInvoicePdf
  }): Observable<StrictHttpResponse<SecupayTransactionExternalInvoicePdf>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupaySofortService.AssignExternalInvoicePdfPath, 'post');
    if (params) {
      rb.path('paymentMethod', params.paymentMethod, {});
      rb.path('paymentId', params.paymentId, {});
      rb.path('documentId', params.documentId, {});
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
        return r as StrictHttpResponse<SecupayTransactionExternalInvoicePdf>;
      })
    );
  }

  /**
   * POST Payment/{paymentMethod}/{paymentId}/assignExternalInvoicePdf/{documentId}.
   *
   * Assign external invoice pdf
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `assignExternalInvoicePdf$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  assignExternalInvoicePdf(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Document id
     */
    documentId: string;

    /**
     * Request body for assigning external invoice pdf
     */
    body?: SecupayTransactionDTOExternalInvoicePdf
  }): Observable<SecupayTransactionExternalInvoicePdf> {

    return this.assignExternalInvoicePdf$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionExternalInvoicePdf>) => r.body as SecupayTransactionExternalInvoicePdf)
    );
  }

  /**
   * Path part for operation cancelPaymentTransactionById
   */
  static readonly CancelPaymentTransactionByIdPath = '/Payment/{paymentMethod}/{paymentId}/cancel';

  /**
   * POST Payment/{paymentMethod}/{paymentId}/cancel.
   *
   * Function to cancel the payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelPaymentTransactionById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelPaymentTransactionById$Response(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Cancel payment transaction input properties
     */
    body?: SecupayTransactionCancelDTO
  }): Observable<StrictHttpResponse<PaymentCancelResult>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupaySofortService.CancelPaymentTransactionByIdPath, 'post');
    if (params) {
      rb.path('paymentMethod', params.paymentMethod, {});
      rb.path('paymentId', params.paymentId, {});
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
        return r as StrictHttpResponse<PaymentCancelResult>;
      })
    );
  }

  /**
   * POST Payment/{paymentMethod}/{paymentId}/cancel.
   *
   * Function to cancel the payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cancelPaymentTransactionById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelPaymentTransactionById(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Cancel payment transaction input properties
     */
    body?: SecupayTransactionCancelDTO
  }): Observable<PaymentCancelResult> {

    return this.cancelPaymentTransactionById$Response(params).pipe(
      map((r: StrictHttpResponse<PaymentCancelResult>) => r.body as PaymentCancelResult)
    );
  }

  /**
   * Path part for operation capturePaymentTransactionById
   */
  static readonly CapturePaymentTransactionByIdPath = '/Payment/{paymentMethod}/{paymentId}/capture';

  /**
   * POST Payment/{paymentMethod}/{paymentId}/capture.
   *
   * Function to cancel the payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `capturePaymentTransactionById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  capturePaymentTransactionById$Response(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Capture payment transaction input properties
     */
    body?: SecupayTransactionCaptureDTO
  }): Observable<StrictHttpResponse<SecupayTransactionProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupaySofortService.CapturePaymentTransactionByIdPath, 'post');
    if (params) {
      rb.path('paymentMethod', params.paymentMethod, {});
      rb.path('paymentId', params.paymentId, {});
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
   * POST Payment/{paymentMethod}/{paymentId}/capture.
   *
   * Function to cancel the payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `capturePaymentTransactionById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  capturePaymentTransactionById(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Capture payment transaction input properties
     */
    body?: SecupayTransactionCaptureDTO
  }): Observable<SecupayTransactionProductModel> {

    return this.capturePaymentTransactionById$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionProductModel>) => r.body as SecupayTransactionProductModel)
    );
  }

  /**
   * Path part for operation updateBasketByPaymentId
   */
  static readonly UpdateBasketByPaymentIdPath = '/Payment/{paymentMethod}/{paymentId}/basket';

  /**
   * PUT Payment/{paymentMethod}/{paymentId}/basket.
   *
   * Update a basket of an existing payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBasketByPaymentId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBasketByPaymentId$Response(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Update basket input properties
     */
    body?: SecupayTransactionUpdateBasketDTO
  }): Observable<StrictHttpResponse<SecupayTransactionProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupaySofortService.UpdateBasketByPaymentIdPath, 'put');
    if (params) {
      rb.path('paymentMethod', params.paymentMethod, {});
      rb.path('paymentId', params.paymentId, {});
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
   * PUT Payment/{paymentMethod}/{paymentId}/basket.
   *
   * Update a basket of an existing payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateBasketByPaymentId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBasketByPaymentId(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Update basket input properties
     */
    body?: SecupayTransactionUpdateBasketDTO
  }): Observable<SecupayTransactionProductModel> {

    return this.updateBasketByPaymentId$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionProductModel>) => r.body as SecupayTransactionProductModel)
    );
  }

  /**
   * Path part for operation reverseAccrualByPaymentId
   */
  static readonly ReverseAccrualByPaymentIdPath = '/Payment/{paymentMethod}/{paymentId}/accrual';

  /**
   * PUT Payment/{paymentMethod}/{paymentId}/accrual.
   *
   * Update the accrual flag of an existing payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reverseAccrualByPaymentId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reverseAccrualByPaymentId$Response(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Reverse accrual input properties
     */
    body?: SecupayTransactionReverseAccrualDTO
  }): Observable<StrictHttpResponse<SecupayTransactionProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupaySofortService.ReverseAccrualByPaymentIdPath, 'put');
    if (params) {
      rb.path('paymentMethod', params.paymentMethod, {});
      rb.path('paymentId', params.paymentId, {});
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
   * PUT Payment/{paymentMethod}/{paymentId}/accrual.
   *
   * Update the accrual flag of an existing payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reverseAccrualByPaymentId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reverseAccrualByPaymentId(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Reverse accrual input properties
     */
    body?: SecupayTransactionReverseAccrualDTO
  }): Observable<SecupayTransactionProductModel> {

    return this.reverseAccrualByPaymentId$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionProductModel>) => r.body as SecupayTransactionProductModel)
    );
  }

  /**
   * Path part for operation setShippingInformationByPaymentId
   */
  static readonly SetShippingInformationByPaymentIdPath = '/Payment/{paymentMethod}/{paymentId}/shippingInformation';

  /**
   * PUT Payment/{paymentMethod}/{paymentId}/shippingInformation.
   *
   * Update the accrual flag of an existing payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setShippingInformationByPaymentId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setShippingInformationByPaymentId$Response(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Shipping information propertie
     */
    body?: SecupayTransactionSetShippingInformationDTO
  }): Observable<StrictHttpResponse<SecupayTransactionProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupaySofortService.SetShippingInformationByPaymentIdPath, 'put');
    if (params) {
      rb.path('paymentMethod', params.paymentMethod, {});
      rb.path('paymentId', params.paymentId, {});
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
   * PUT Payment/{paymentMethod}/{paymentId}/shippingInformation.
   *
   * Update the accrual flag of an existing payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `setShippingInformationByPaymentId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setShippingInformationByPaymentId(params: {

    /**
     * Payment method (secupaydebits, secupayprepays, secupayinvoices, ...)
     */
    paymentMethod: string;

    /**
     * Payment id
     */
    paymentId: string;

    /**
     * Shipping information propertie
     */
    body?: SecupayTransactionSetShippingInformationDTO
  }): Observable<SecupayTransactionProductModel> {

    return this.setShippingInformationByPaymentId$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionProductModel>) => r.body as SecupayTransactionProductModel)
    );
  }

  /**
   * Path part for operation paymentSecupaysofortPaymentSecupaySofortGetById
   */
  static readonly PaymentSecupaysofortPaymentSecupaySofortGetByIdPath = '/Payment/Secupaysofort/{paymentPrepayId}';

  /**
   * GET Payment/Secupaysofort/{paymentPrepayId}.
   *
   * Get the details of a payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentSecupaysofortPaymentSecupaySofortGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentSecupaysofortPaymentSecupaySofortGetById$Response(params: {

    /**
     * Payment prepay id
     */
    paymentPrepayId: string;
  }): Observable<StrictHttpResponse<SecupayTransactionProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupaySofortService.PaymentSecupaysofortPaymentSecupaySofortGetByIdPath, 'get');
    if (params) {
      rb.path('paymentPrepayId', params.paymentPrepayId, {});
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
   * GET Payment/Secupaysofort/{paymentPrepayId}.
   *
   * Get the details of a payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentSecupaysofortPaymentSecupaySofortGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentSecupaysofortPaymentSecupaySofortGetById(params: {

    /**
     * Payment prepay id
     */
    paymentPrepayId: string;
  }): Observable<SecupayTransactionProductModel> {

    return this.paymentSecupaysofortPaymentSecupaySofortGetById$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionProductModel>) => r.body as SecupayTransactionProductModel)
    );
  }

  /**
   * Path part for operation paymentSecupaysofortPaymentSecupaysofortPost
   */
  static readonly PaymentSecupaysofortPaymentSecupaysofortPostPath = '/Payment/Secupaysofort';

  /**
   * POST Payment/Secupaysofort.
   *
   * Start a prepay payment transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentSecupaysofortPaymentSecupaysofortPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentSecupaysofortPaymentSecupaysofortPost$Response(params?: {

    /**
     * Prepay payment transaction input properties
     */
    body?: SecupayTransactionProductDTO
  }): Observable<StrictHttpResponse<SecupayTransactionProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentSecupaySofortService.PaymentSecupaysofortPaymentSecupaysofortPostPath, 'post');
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
   * POST Payment/Secupaysofort.
   *
   * Start a prepay payment transaction
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paymentSecupaysofortPaymentSecupaysofortPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  paymentSecupaysofortPaymentSecupaysofortPost(params?: {

    /**
     * Prepay payment transaction input properties
     */
    body?: SecupayTransactionProductDTO
  }): Observable<SecupayTransactionProductModel> {

    return this.paymentSecupaysofortPaymentSecupaysofortPost$Response(params).pipe(
      map((r: StrictHttpResponse<SecupayTransactionProductModel>) => r.body as SecupayTransactionProductModel)
    );
  }

}
