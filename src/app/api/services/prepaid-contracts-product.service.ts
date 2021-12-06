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

import {PrepaidMappingZvt} from '../models/prepaid-mapping-zvt';
import {PrepaidZvtDTO} from '../models/prepaid-zvt-dto';


/**
 * Mapping utility
 */
@Injectable({
  providedIn: 'root',
})
export class PrepaidContractsProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation prepaidContractsMappingZvt
   */
  static readonly PrepaidContractsMappingZvtPath = '/Prepaid/Contracts/{prepaidContractId}/mappingZvt';

  /**
   * POST Prepaid/Contracts/me/mappingZvt.
   *
   * Gets prepaid item id from product id which is configured in prepaid contracts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prepaidContractsMappingZvt()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prepaidContractsMappingZvt$Response(params: {

    /**
     * Prepaid contract id
     */
    prepaidContractId: string;

    /**
     * Prepaid transaction input properties
     */
    body?: PrepaidZvtDTO
  }): Observable<StrictHttpResponse<PrepaidMappingZvt>> {

    const rb = new RequestBuilder(this.rootUrl, PrepaidContractsProductService.PrepaidContractsMappingZvtPath, 'post');
    if (params) {
      rb.path('prepaidContractId', params.prepaidContractId, {});
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
        return r as StrictHttpResponse<PrepaidMappingZvt>;
      })
    );
  }

  /**
   * POST Prepaid/Contracts/me/mappingZvt.
   *
   * Gets prepaid item id from product id which is configured in prepaid contracts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prepaidContractsMappingZvt$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prepaidContractsMappingZvt(params: {

    /**
     * Prepaid contract id
     */
    prepaidContractId: string;

    /**
     * Prepaid transaction input properties
     */
    body?: PrepaidZvtDTO
  }): Observable<PrepaidMappingZvt> {

    return this.prepaidContractsMappingZvt$Response(params).pipe(
      map((r: StrictHttpResponse<PrepaidMappingZvt>) => r.body as PrepaidMappingZvt)
    );
  }

}
