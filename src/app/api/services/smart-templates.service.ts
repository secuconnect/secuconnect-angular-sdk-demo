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

import {SmartTemplatesList} from '../models/smart-templates-list';
import {SmartTemplatesProductModel} from '../models/smart-templates-product-model';

@Injectable({
  providedIn: 'root',
})
export class SmartTemplatesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation smartTemplatesGetAll
   */
  static readonly SmartTemplatesGetAllPath = '/Smart/Templates';

  /**
   * GET Smart/Templates.
   *
   * Get a list of smart templates
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTemplatesGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTemplatesGetAll$Response(params?: {

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
  }): Observable<StrictHttpResponse<SmartTemplatesList>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTemplatesService.SmartTemplatesGetAllPath, 'get');
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
        return r as StrictHttpResponse<SmartTemplatesList>;
      })
    );
  }

  /**
   * GET Smart/Templates.
   *
   * Get a list of smart templates
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTemplatesGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTemplatesGetAll(params?: {

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
  }): Observable<SmartTemplatesList> {

    return this.smartTemplatesGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTemplatesList>) => r.body as SmartTemplatesList)
    );
  }

  /**
   * Path part for operation smartTemplatesGetOne
   */
  static readonly SmartTemplatesGetOnePath = '/Smart/Templates/{smartTemplateId}';

  /**
   * GET Smart/Templates/{smartTemplateId}.
   *
   * Get one smart template for a specific id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `smartTemplatesGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTemplatesGetOne$Response(params: {

    /**
     * Smart template id
     */
    smartTemplateId: string;
  }): Observable<StrictHttpResponse<SmartTemplatesProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, SmartTemplatesService.SmartTemplatesGetOnePath, 'get');
    if (params) {
      rb.path('smartTemplateId', params.smartTemplateId, {});
    }

    let tokenService = new TokenService(this.config, this.http);
    rb.header('Authorization', 'Bearer ' + tokenService.getToken());

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmartTemplatesProductModel>;
      })
    );
  }

  /**
   * GET Smart/Templates/{smartTemplateId}.
   *
   * Get one smart template for a specific id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `smartTemplatesGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  smartTemplatesGetOne(params: {

    /**
     * Smart template id
     */
    smartTemplateId: string;
  }): Observable<SmartTemplatesProductModel> {

    return this.smartTemplatesGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<SmartTemplatesProductModel>) => r.body as SmartTemplatesProductModel)
    );
  }

}
