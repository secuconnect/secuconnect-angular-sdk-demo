// noinspection JSUnusedGlobalSymbols

import {ObjectId} from './object-id';
import {ObjectType} from './object-type';

export class InvitedBy {
  object?: ObjectType;
  id?: ObjectId;
  /**
   * Invited
   */
  invited?: string;
}
