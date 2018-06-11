import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

// Import typedefs and resolvers here from ./entities/ folder
import { entityResolver, entityTypedef } from './entity';

// Global typedef for extends of Query and Mutation
const typeDef = `
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`

const schema = makeExecutableSchema({
  typeDefs: [
    typeDef,
    // Include typedefs here
  ],
  resolvers: merge(
    // Include resolvers here
  )
});

export default schema;