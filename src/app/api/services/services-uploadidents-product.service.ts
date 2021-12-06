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

import {UploadidentsProductDTO} from '../models/uploadidents-product-dto';
import {UploadidentsProductModel} from '../models/uploadidents-product-model';


/**
 * Creates a customer identification request, connected with a
 * particular payment transaction for payout.
 */
@Injectable({
  providedIn: 'root',
})
export class ServicesUploadidentsProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation servicesUploadidentsAddUploadidents
   */
  static readonly ServicesUploadidentsAddUploadidentsPath = '/Services/Uploadidents';

  /**
   * POST Services/Uploadidents.
   *
   * Create new upload ident
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicesUploadidentsAddUploadidents()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicesUploadidentsAddUploadidents$Response(params?: {

    /**
     * Upload idents input properties
     */
    body?: UploadidentsProductDTO
  }): Observable<StrictHttpResponse<UploadidentsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, ServicesUploadidentsProductService.ServicesUploadidentsAddUploadidentsPath, 'post');
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
        return r as StrictHttpResponse<UploadidentsProductModel>;
      })
    );
  }

  /**
   * POST Services/Uploadidents.
   *
   * Create new upload ident
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `servicesUploadidentsAddUploadidents$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicesUploadidentsAddUploadidents(params?: {

    /**
     * Upload idents input properties
     */
    body?: UploadidentsProductDTO
  }): Observable<UploadidentsProductModel> {

    return this.servicesUploadidentsAddUploadidents$Response(params).pipe(
      map((r: StrictHttpResponse<UploadidentsProductModel>) => r.body as UploadidentsProductModel)
    );
  }

}
