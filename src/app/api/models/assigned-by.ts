// noinspection JSUnusedGlobalSymbols

import {ObjectId} from './object-id';
import {ObjectType} from './object-type';

export class AssignedBy {
  object?: ObjectType;
  id?: ObjectId;
  /**
   * Owner
   */
  owner?: boolean;
}
