/* tslint:disable */
/* eslint-disable */
// noinspection JSUnusedGlobalSymbols

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConfiguration} from './api-configuration';
import {Token} from "./token";

/**
 * Base class for services
 */
@Injectable()
export class TokenService {
  constructor(
    protected config: ApiConfiguration,
    protected http: HttpClient
  ) {
  }

  static CREDENTIALS: Token;

  getToken(): string {
    // if (!TokenService.CREDENTIALS?.access_token
    //   || !TokenService.CREDENTIALS?.expires_on
    //   || Date.now() / 1000 > TokenService.CREDENTIALS.expires_on
    // ) {
    //   TokenService.CREDENTIALS = this.refreshToken();
    // }
    //
    return TokenService.CREDENTIALS?.access_token;
  }

  refreshToken(): Token {
    let token = new Token();
    token.access_token = '...';
    token.expires_on = Date.now() + 1200 * 1000;
    return token;
  }
}
