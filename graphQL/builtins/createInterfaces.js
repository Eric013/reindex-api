import {
  GraphQLInterfaceType,
  GraphQLNonNull,
} from 'graphql';
import ReindexID from './ReindexID';

export default function createInterfaces(typeRegistry) {
  typeRegistry.registerInterface(
    new GraphQLInterfaceType({
      name: 'Node',
      description: 'An object with a globally unique ID.',
      fields: {
        id: {
          type: new GraphQLNonNull(ReindexID),
          description: 'The ID of the object.',
          metadata: {
            unique: true,
          },
        },
      },
      resolveType(object, context, info) {
        if (object && object.id && object.id.type) {
          return info.schema.getType(object.id.type);
        }
      },
    }),
  );
}
