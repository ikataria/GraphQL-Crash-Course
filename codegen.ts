import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/', // or your running GraphQL server
  documents: 'client/src/graphql/**/*.graphql',
  generates: {
    'client/src/gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
