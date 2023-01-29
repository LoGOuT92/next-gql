import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://countries.trevorblades.com/',
    documents: ['graphql/**/*.graphql'],
    ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'path/to/file.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true
      },
    },
  },
};
export default config;