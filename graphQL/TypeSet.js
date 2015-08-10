import {List, Record} from 'immutable';

const TypeSet = new Record({
  type: undefined,
  connection: undefined,
  inputObject: undefined,
  mutation: undefined,
  blacklistedRootFields: List(),
});

export default TypeSet;