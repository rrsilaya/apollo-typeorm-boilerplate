# apollo-typeorm-boilerplate

Boilerplate for Apollo (GraphQL) + TypeORM (MySQL) projects

### Installation
1. Clone this repository.
2. Install all the dependencies by running `yarn`.
3. Configure the project depending on your setup.
4. Use `yarn start` to start the development server.

### Project Structure
```
.
├── node_modules/
├── src/
│   ├── bin/
│   │   └── www.ts
│   ├── database/
│   │   └── index.ts
│   ├── entities/
│   │   ├── entity/
│   │   │   ├── controller.ts
│   │   │   ├── index.ts
│   │   │   └── model.ts
│   │   └── index.ts
│   ├── util/
│   │   ├── index.ts
│   │   └── logger.ts
│   └── app.ts
├── nodemon.json
├── package.json
├── README.md
└── tsconfig.json
```

### Guides
Each entity will contain at least three files: `controller.ts`, `model.ts`, and `index.ts`.

1. `controller.ts` - holds the database controllers that will be used as functions for resolvers
2. `model.ts` - holds the entity model that's being used for the database (TypeORM)
3. `index.ts` - holds the `typeDef` and `resolvers` for GraphQL setup (Apollo)

##### Typedef
Index `typeDef` is defined in `./src/entities/index.ts`. Should you add Query and Mutation types, you should prepend `extend` keyword on them inside `index.ts` of each entities.

```js
export const entityTypedef = `
  type Entity {
    id: Int!
    randomData: String!
  }

  extend type Query {
    entities: [Entity!]!
    entity(id: Int!): Entity
  }

  extend type Mutation {
    addEntity(
      randomData: String!
    ): Entity!
  }
`;
```

##### Resolver
```js
export const entityResolver = {
  Query: {
    entities: Ctrl.getEntities,
    entity: Ctrl.getEntity
  },
  Mutation: {
    addEntity: Ctrl.addEntity
  }
}
```

From the code above, you can see the values of `Query` and `Mutation` are from `Ctrl`. These are the controller functions that are used to handle the queries and mutations.

```js
// controller.ts

export const getEntities = async () => await Entity.find();

export const getEntity = async (_, args) => await Entity.find(args);

// ...
```

##### Model
This is the model of the entity. We're using TypeORM for MySQL. They can be found at `model.ts` files. For more information, go [here](https://typeorm.io/).

```js
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
class Entity extends BaseEntity {
  @PrimaryGeneratedColumn
  id: number;

  @Column
  randomData: string;
}

export default Entity;
```