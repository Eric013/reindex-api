import {Record} from 'immutable';
import getSchemaQuery from './getSchemaQuery';

/**
 * Selects schema
 *
 * @implements Selector
 *
 * @method toReQL(r, db)
 */
export default class SchemaSelector extends Record({
}) {
  toReQL(r, db) {
    return getSchemaQuery(db);
  }
}