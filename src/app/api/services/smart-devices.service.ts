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

import {SmartDeviceUserPin} from '../models/smart-device-user-pin';
import {SmartDevicesDTO} from '../models/smart-devices-dto';
import {SmartDevicesList} from '../models/smart-devices-list';
import {SmartDevicesProductModel} from '../models/smart-devices-product-model';


/**
 * A Smart Device is a device like a POS payment terminal, or
 * an electronic cash register (ECR). You can innterconnect such devices with each
 * other (s. Smart Routings), but they are also connected with our system. Every
 * device belongs to a store (s. General Stores). There are also virtual devices
 * for specific tasks.
 */
@Injectable({
  providedIn: 'root',
})
export class SmartDevicesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation smartDevicesGetAll
   */
  static readonly SmartDevicesGetAllPath = '/Smart/Devices';

  /**
   * GET Smart/Devices.
   *
   * Get a list of smart devices
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartDevicesGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartDevicesGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<SmartDevicesList>> {

    const rb = new RequestBuilder(this.rootUrl, SmartDevicesService.SmartDevicesGetAllPath, 'get');
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
        return r as StrictHttpResponse<SmartDevicesList>;
      })
    );
  }

  /**
   * GET Smart/Devices.
   *
   * Get a list of smart devices
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartDevicesGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartDevicesGetAll(params?: {

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
  }): Observable<SmartDevicesList> {

    return this.smartDevicesGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<SmartDevicesList>) => r.body as SmartDevicesList)
    );
  }

  /**
   * Path part for operation smartDevicesAddDevice
   */
  static readonly SmartDevicesAddDevicePath = '/Smart/Devices';

  /**
   * POST Smart/Devices.
   *
   * Create new smart device
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartDevicesAddDevice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartDevicesAddDevice$Response(params?: {

    /**
     * Smart device properties
     */
    body?: SmartDevicesDTO
  }): Observable<StrictHttpResponse<SmartDevicesProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartDevicesService.SmartDevicesAddDevicePath, 'post');
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
        return r as StrictHttpResponse<SmartDevicesProductModel>;
      })
    );
  }

  /**
   * POST Smart/Devices.
   *
   * Create new smart device
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartDevicesAddDevice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartDevicesAddDevice(params?: {

    /**
     * Smart device properties
     */
    body?: SmartDevicesDTO
  }): Observable<SmartDevicesProductModel> {

    return this.smartDevicesAddDevice$Response(params).pipe(
      map((r: StrictHttpResponse<SmartDevicesProductModel>) => r.body as SmartDevicesProductModel)
    );
  }

  /**
   * Path part for operation smartDevicesGetOne
   */
  static readonly SmartDevicesGetOnePath = '/Smart/Devices/{smartDeviceId}';

  /**
   * GET Smart/Devices/{smartDeviceId}.
   *
   * Get one smart device for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartDevicesGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartDevicesGetOne$Response(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;
  }): Observable<StrictHttpResponse<SmartDevicesProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartDevicesService.SmartDevicesGetOnePath, 'get');
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
        return r as StrictHttpResponse<SmartDevicesProductModel>;
      })
    );
  }

  /**
   * GET Smart/Devices/{smartDeviceId}.
   *
   * Get one smart device for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartDevicesGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartDevicesGetOne(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;
  }): Observable<SmartDevicesProductModel> {

    return this.smartDevicesGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<SmartDevicesProductModel>) => r.body as SmartDevicesProductModel)
    );
  }

  /**
   * Path part for operation smartDevicesUpdateDevice
   */
  static readonly SmartDevicesUpdateDevicePath = '/Smart/Devices/{smartDeviceId}';

  /**
   * PUT Smart/Devices/{smartDeviceId}.
   *
   * Update smart device
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartDevicesUpdateDevice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartDevicesUpdateDevice$Response(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;

    /**
     * Smart device properties
     */
    body?: SmartDevicesDTO
  }): Observable<StrictHttpResponse<SmartDevicesProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartDevicesService.SmartDevicesUpdateDevicePath, 'put');
    if (params) {
      rb.path('smartDeviceId', params.smartDeviceId, {});
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
        return r as StrictHttpResponse<SmartDevicesProductModel>;
      })
    );
  }

  /**
   * PUT Smart/Devices/{smartDeviceId}.
   *
   * Update smart device
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartDevicesUpdateDevice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartDevicesUpdateDevice(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;

    /**
     * Smart device properties
     */
    body?: SmartDevicesDTO
  }): Observable<SmartDevicesProductModel> {

    return this.smartDevicesUpdateDevice$Response(params).pipe(
      map((r: StrictHttpResponse<SmartDevicesProductModel>) => r.body as SmartDevicesProductModel)
    );
  }

  /**
   * Path part for operation smartDevicesGetRouting
   */
  static readonly SmartDevicesGetRoutingPath = '/Smart/Devices/{smartDeviceId}/routing/type/{type}';

  /**
   * GET Smart/Devices/{smartDeviceId}/routing/type/{type}.
   *
   * Get requested smart device if it is assigned to a single routing
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartDevicesGetRouting()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartDevicesGetRouting$Response(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;

    /**
     * Smart Device Type
     */
    type: string;
  }): Observable<StrictHttpResponse<SmartDevicesProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartDevicesService.SmartDevicesGetRoutingPath, 'get');
    if (params) {
      rb.path('smartDeviceId', params.smartDeviceId, {});
      rb.path('type', params.type, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartDevicesProductModel>;
      })
    );
  }

  /**
   * GET Smart/Devices/{smartDeviceId}/routing/type/{type}.
   *
   * Get requested smart device if it is assigned to a single routing
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartDevicesGetRouting$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartDevicesGetRouting(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;

    /**
     * Smart Device Type
     */
    type: string;
  }): Observable<SmartDevicesProductModel> {

    return this.smartDevicesGetRouting$Response(params).pipe(
      map((r: StrictHttpResponse<SmartDevicesProductModel>) => r.body as SmartDevicesProductModel)
    );
  }

  /**
   * Path part for operation smartDevicesUpdatePin
   */
  static readonly SmartDevicesUpdatePinPath = '/Smart/Devices/{smartDeviceId}/pin';

  /**
   * PUT /Smart/Devices/{smartDeviceId}/pin.
   *
   * Update Smart Device Pin to authenticate device
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartDevicesUpdatePin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartDevicesUpdatePin$Response(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;

    /**
     * Smart device properties
     */
    body?: SmartDeviceUserPin
  }): Observable<StrictHttpResponse<SmartDevicesProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartDevicesService.SmartDevicesUpdatePinPath, 'put');
    if (params) {
      rb.path('smartDeviceId', params.smartDeviceId, {});
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
        return r as StrictHttpResponse<SmartDevicesProductModel>;
      })
    );
  }

  /**
   * PUT /Smart/Devices/{smartDeviceId}/pin.
   *
   * Update Smart Device Pin to authenticate device
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartDevicesUpdatePin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  smartDevicesUpdatePin(params: {

    /**
     * Smart device id
     */
    smartDeviceId: string;

    /**
     * Smart device properties
     */
    body?: SmartDeviceUserPin
  }): Observable<SmartDevicesProductModel> {

    return this.smartDevicesUpdatePin$Response(params).pipe(
      map((r: StrictHttpResponse<SmartDevicesProductModel>) => r.body as SmartDevicesProductModel)
    );
  }

}
