// noinspection JSUnusedGlobalSymbols

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Environment {
  static get globalEnvironment(): Environment {
    return this._globalEnvironment;
  }

  static set globalEnvironment(defaultEnvironment: Environment) {
    this._globalEnvironment = defaultEnvironment;
  }

  get basePath(): string {
    return this._basePath;
  }

  get authPath(): string {
    return this._authPath;
  }

  get id(): string {
    return this._id;
  }

  rootUrl: string = 'https://connect-testing.secupay-ag.de/api/v2';

  public static readonly ENV_ID_LIVE = "LIVE";
  public static readonly ENV_ID_TESTING = "TESTING";

  public static readonly BASE_PATH_LIVE = "https://connect.secucard.com/api/v2";
  public static readonly BASE_PATH_TESTING = "https://connect-testing.secupay-ag.de/api/v2";

  public static readonly AUTH_PATH_LIVE = "https://connect.secucard.com/oauth/token";
  public static readonly AUTH_PATH_TESTING = "https://connect-testing.secupay-ag.de/oauth/token";

  public static readonly DEFAULT_AUTH_CACHE_FOLDER = ".auth";

  private static _globalEnvironment: Environment = new Environment().useTestingPaths();

  private _id: string = Environment.ENV_ID_TESTING;
  private _basePath: string = Environment.BASE_PATH_TESTING;
  private _authPath: string = Environment.AUTH_PATH_TESTING;


  public useLivePaths(): Environment {
    this._id = Environment.ENV_ID_LIVE;
    this._basePath = Environment.BASE_PATH_LIVE;
    this._authPath = Environment.AUTH_PATH_LIVE;
    return this;
  }

  public useTestingPaths(): Environment {
    this._id = Environment.ENV_ID_TESTING;
    this._basePath = Environment.BASE_PATH_TESTING;
    this._authPath = Environment.AUTH_PATH_TESTING;
    return this;
  }

  public useCustomPaths(envId: string, basePath: string, authPath: string): Environment {
    if (envId.length > 8) {
      envId = envId.substring(0, 7);
    }

    basePath = basePath.replace(/\/$/, '');

    this._id = envId;
    this._basePath = basePath;
    this._authPath = authPath;
    return this;
  }
}
