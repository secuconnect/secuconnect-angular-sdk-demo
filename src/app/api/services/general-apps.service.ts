// // noinspection JSUnusedGlobalSymbols,DuplicatedCode
//
// import { Injectable } from '@angular/core';
// import {HttpClient, HttpResponse} from '@angular/common/http';
// import { BaseService } from '../base-service';
// import { ApiConfiguration } from '../api-configuration';
// import { StrictHttpResponse } from '../strict-http-response';
// import { RequestBuilder } from '../request-builder';
// import { Observable } from 'rxjs';
// import { map, filter } from 'rxjs/operators';
//
//
// @Injectable({
//   providedIn: 'root',
// })
// export class GeneralAppsService extends BaseService {
//   constructor(
//     config: ApiConfiguration,
//     http: HttpClient
//   ) {
//     super(config, http);
//   }
//
//   /**
//    * Path part for operation generalAppsGetAll
//    */
//   static readonly GeneralAppsGetAllPath = '/General/Apps';
//
//   /**
//    * GET General/Apps.
//    *
//    * Get a list of general apps
//    *
//    * This method provides access to the full `HttpResponse`, allowing access to response headers.
//    * To access only the response body, use `generalAppsGetAll()` instead.
//    *
//    * This method doesn't expect any request body.
//    */
//   generalAppsGetAll$Response(params?: {
//
//     /**
//      * The maximum number of items to return
//      */
//     count?: number;
//
//     /**
//      * The position within the whole result set to start returning items (zero-based)
//      */
//     offset?: number;
//
//     /**
//      * List of fields to include in the result. Nested properties can be accessed with this notation: &#x60;prop1.prop2&#x60;.
//      */
//     fields?: string;
//
//     /**
//      * A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form &#x60;property:condition&#x60;. Property names can be nested like &#x60;property.property&#x60;.
//      *
//      * Example: &#x60;customer.name:Meier&#x60;
//      *
//      * A condition may contain:
//      *  * &#x60;?&#x60; as wildcard for one character;
//      *  * &#x60;*&#x60; as wildcard for any number of characters.
//      *
//      * You can also use value ranges in the form &#x60;[min TO max]&#x60;.
//      *
//      * Example: &#x60;customer.age:[30 TO 40]&#x60;
//      *
//      * You can combine expressions logically by &#x60;expr AND expr&#x60; and &#x60;{expr} OR {expr}&#x60;. You can also negate an expression using &#x60;NOT {expr}&#x60;. Parenthesis &#x60;(...)&#x60; can be used to control precedence.
//      *
//      * Example: &#x60;(NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])&#x60;
//      */
//     'q'?: string;
//
//     /**
//      * String with comma separated pairs of &#x60;field:order&#x60;.
//      *
//      * Options for order:
//      *  * &#x60;asc&#x60; ascending;
//      *  * &#x60;dsc&#x60; descending.
//      */
//     sort?: string;
//   }): Observable<StrictHttpResponse<GeneralAppsList>> {
//
//     const rb = new RequestBuilder(this.rootUrl, GeneralAppsService.GeneralAppsGetAllPath, 'get');
//     if (params) {
//       rb.query('count', params.count, {});
//       rb.query('offset', params.offset, {});
//       rb.query('fields', params.fields, {});
//       rb.query('q', params['q'], {});
//       rb.query('sort', params.sort, {});
//     }
//
//     rb.header('Authorization', 'Bearer ckeskbcntk6tr20h6m47hd51r1');
//
//     let request = rb.build({
//       responseType: 'json',
//       accept: 'application/json',
//     });
//     return this.http.request(request).pipe(
//       filter((r: any) => r instanceof HttpResponse),
//       map((r: HttpResponse<any>) => {
//         return r as StrictHttpResponse<GeneralAppsList>;
//       })
//     );
//   }
//
//   /**
//    * GET General/Apps.
//    *
//    * Get a list of general apps
//    *
//    * This method provides access to only to the response body.
//    * To access the full response (for headers, for example), `generalAppsGetAll$Response()` instead.
//    *
//    * This method doesn't expect any request body.
//    */
//   generalAppsGetAll(params?: {
//
//     /**
//      * The maximum number of items to return
//      */
//     count?: number;
//
//     /**
//      * The position within the whole result set to start returning items (zero-based)
//      */
//     offset?: number;
//
//     /**
//      * List of fields to include in the result. Nested properties can be accessed with this notation: &#x60;prop1.prop2&#x60;.
//      */
//     fields?: string;
//
//     /**
//      * A query string to restrict the returned items to given conditions. The query string must consist of any combination of single expressions in the form &#x60;property:condition&#x60;. Property names can be nested like &#x60;property.property&#x60;.
//      *
//      * Example: &#x60;customer.name:Meier&#x60;
//      *
//      * A condition may contain:
//      *  * &#x60;?&#x60; as wildcard for one character;
//      *  * &#x60;*&#x60; as wildcard for any number of characters.
//      *
//      * You can also use value ranges in the form &#x60;[min TO max]&#x60;.
//      *
//      * Example: &#x60;customer.age:[30 TO 40]&#x60;
//      *
//      * You can combine expressions logically by &#x60;expr AND expr&#x60; and &#x60;{expr} OR {expr}&#x60;. You can also negate an expression using &#x60;NOT {expr}&#x60;. Parenthesis &#x60;(...)&#x60; can be used to control precedence.
//      *
//      * Example: &#x60;(NOT customer.name:meier*) AND (customer.age:[30 TO 40] OR customer.age:[50 TO 60])&#x60;
//      */
//     'q'?: string;
//
//     /**
//      * String with comma separated pairs of &#x60;field:order&#x60;.
//      *
//      * Options for order:
//      *  * &#x60;asc&#x60; ascending;
//      *  * &#x60;dsc&#x60; descending.
//      */
//     sort?: string;
//   }): Observable<GeneralAppsList> {
//
//     return this.generalAppsGetAll$Response(params).pipe(
//       map((r: StrictHttpResponse<GeneralAppsList>) => r.body as GeneralAppsList)
//     );
//   }
//
//   /**
//    * Path part for operation generalAppsGetOne
//    */
//   static readonly GeneralAppsGetOnePath = '/General/Apps/{generalAppId}';
//
//   /**
//    * GET General/Apps/{generalAppId}.
//    *
//    * Get one general app for a specific id
//    *
//    * This method provides access to the full `HttpResponse`, allowing access to response headers.
//    * To access only the response body, use `generalAppsGetOne()` instead.
//    *
//    * This method doesn't expect any request body.
//    */
//   generalAppsGetOne$Response(params: {
//
//     /**
//      * General app id
//      */
//     generalAppId: string;
//   }): Observable<StrictHttpResponse<GeneralAppsProductModel>> {
//
//     const rb = new RequestBuilder(this.rootUrl, GeneralAppsService.GeneralAppsGetOnePath, 'get');
//     if (params) {
//       rb.path('generalAppId', params.generalAppId, {});
//     }
//
// let tokenService = new TokenService(this.config, this.http);
rb.header('Authorization', 'Bearer ' + tokenService.getToken());

return this.http.request(rb.build({
//       responseType: 'json',
//       accept: 'application/json'
//     })).pipe(
//       filter((r: any) => r instanceof HttpResponse),
//       map((r: HttpResponse<any>) => {
//         return r as StrictHttpResponse<GeneralAppsProductModel>;
//       })
//     );
//   }
//
//   /**
//    * GET General/Apps/{generalAppId}.
//    *
//    * Get one general app for a specific id
//    *
//    * This method provides access to only to the response body.
//    * To access the full response (for headers, for example), `generalAppsGetOne$Response()` instead.
//    *
//    * This method doesn't expect any request body.
//    */
//   generalAppsGetOne(params: {
//
//     /**
//      * General app id
//      */
//     generalAppId: string;
//   }): Observable<GeneralAppsProductModel> {
//
//     return this.generalAppsGetOne$Response(params).pipe(
//       map((r: StrictHttpResponse<GeneralAppsProductModel>) => r.body as GeneralAppsProductModel)
//     );
//   }
//
//   /**
//    * Path part for operation generalStoresGetPublicData
//    */
//   static readonly GeneralStoresGetPublicDataPath = '/General/Apps/{generalAppId}/getPublicData/{generalContractId}';
//
//   /**
//    * POST General/Apps/{generalAppId}/getPublicData/{generalContractId}.
//    *
//    * Get Public Data of a App
//    *
//    * This method provides access to the full `HttpResponse`, allowing access to response headers.
//    * To access only the response body, use `generalStoresGetPublicData()` instead.
//    *
//    * This method doesn't expect any request body.
//    */
//   generalStoresGetPublicData$Response(params: {
//
//     /**
//      * App identifier
//      */
//     generalAppId: string;
//
//     /**
//      * Contract identifier
//      */
//     generalContractId: string;
//   }): Observable<StrictHttpResponse<GeneralAppsPublicDataModel>> {
//
//     const rb = new RequestBuilder(this.rootUrl, GeneralAppsService.GeneralStoresGetPublicDataPath, 'post');
//     if (params) {
//       rb.path('generalAppId', params.generalAppId, {});
//       rb.path('generalContractId', params.generalContractId, {});
//     }
//
// let tokenService = new TokenService(this.config, this.http);
  rb.header('Authorization', 'Bearer ' + tokenService.getToken());

  return this.http.request(rb.build({
//       responseType: 'json',
//       accept: 'application/json'
//     })).pipe(
//       filter((r: any) => r instanceof HttpResponse),
//       map((r: HttpResponse<any>) => {
//         return r as StrictHttpResponse<GeneralAppsPublicDataModel>;
//       })
//     );
//   }
//
//   /**
//    * POST General/Apps/{generalAppId}/getPublicData/{generalContractId}.
//    *
//    * Get Public Data of a App
//    *
//    * This method provides access to only to the response body.
//    * To access the full response (for headers, for example), `generalStoresGetPublicData$Response()` instead.
//    *
//    * This method doesn't expect any request body.
//    */
//   generalStoresGetPublicData(params: {
//
//     /**
//      * App identifier
//      */
//     generalAppId: string;
//
//     /**
//      * Contract identifier
//      */
//     generalContractId: string;
//   }): Observable<GeneralAppsPublicDataModel> {
//
//     return this.generalStoresGetPublicData$Response(params).pipe(
//       map((r: StrictHttpResponse<GeneralAppsPublicDataModel>) => r.body as GeneralAppsPublicDataModel)
//     );
//   }
//
// }
