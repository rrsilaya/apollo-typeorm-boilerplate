import * as Ctrl from './controller';

export const entityTypedef = `
  type Entity {
    message: String!
  }
`;

export const entityResolver = {
  // Include resolvers here

  Query: {
    message: Ctrl.getEntity
  }
}