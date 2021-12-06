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

import {DocumentUploadsBaseProductModel} from '../models/document-uploads-base-product-model';
import {DocumentUploadsDTOContent} from '../models/document-uploads-dto-content';
import {DocumentUploadsProductModel} from '../models/document-uploads-product-model';
import {FileToUpload} from '../models/file-to-upload';


/**
 * Upload files like logo images, PDFs with legal information,
 * and so on.
 */
@Injectable({
  providedIn: 'root',
})
export class DocumentUploadsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation documentUploadsDocumentUploadsMultipartPost
   */
  static readonly DocumentUploadsDocumentUploadsMultipartPostPath = '/Document/Uploads?multipart';

  /**
   * POST Document/Uploads.
   *
   * Store uploaded file
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentUploadsDocumentUploadsMultipartPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentUploadsDocumentUploadsMultipartPost$Response(params?: {
    multipart?: string;

    /**
     * Input data format
     */
    body?: FileToUpload
  }): Observable<StrictHttpResponse<DocumentUploadsProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentUploadsService.DocumentUploadsDocumentUploadsMultipartPostPath, 'post');
    if (params) {
      rb.query('multipart', params.multipart, {});
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
        return r as StrictHttpResponse<DocumentUploadsProductModel>;
      })
    );
  }

  /**
   * POST Document/Uploads.
   *
   * Store uploaded file
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `documentUploadsDocumentUploadsMultipartPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentUploadsDocumentUploadsMultipartPost(params?: {
    multipart?: string;

    /**
     * Input data format
     */
    body?: FileToUpload
  }): Observable<DocumentUploadsProductModel> {

    return this.documentUploadsDocumentUploadsMultipartPost$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentUploadsProductModel>) => r.body as DocumentUploadsProductModel)
    );
  }

  /**
   * Path part for operation documentUploadsDocumentUploadsPost
   */
  static readonly DocumentUploadsDocumentUploadsPostPath = '/Document/Uploads';

  /**
   * POST Document/Uploads.
   *
   * Store uploaded file
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentUploadsDocumentUploadsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentUploadsDocumentUploadsPost$Response(params?: {

    /**
     * Content
     */
    body?: DocumentUploadsDTOContent
  }): Observable<StrictHttpResponse<DocumentUploadsBaseProductModel>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentUploadsService.DocumentUploadsDocumentUploadsPostPath, 'post');
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
        return r as StrictHttpResponse<DocumentUploadsBaseProductModel>;
      })
    );
  }

  /**
   * POST Document/Uploads.
   *
   * Store uploaded file
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `documentUploadsDocumentUploadsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentUploadsDocumentUploadsPost(params?: {

    /**
     * Content
     */
    body?: DocumentUploadsDTOContent
  }): Observable<DocumentUploadsBaseProductModel> {

    return this.documentUploadsDocumentUploadsPost$Response(params).pipe(
      map((r: StrictHttpResponse<DocumentUploadsBaseProductModel>) => r.body as DocumentUploadsBaseProductModel)
    );
  }

}
