// noinspection JSUnusedGlobalSymbols

import {ObjectId} from './object-id';
import {ObjectType} from './object-type';

export class ParentModel {
  object?: ObjectType;
  id?: ObjectId;
  /**
   * Parent object subtype number
   */
  type?: string;
}
