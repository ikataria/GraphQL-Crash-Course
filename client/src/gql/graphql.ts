/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddGameInput = {
  platform: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  review?: Maybe<Array<Review>>;
  verified: Scalars['Boolean']['output'];
};

export type EditGameInput = {
  platform?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['ID']['output'];
  platform: Array<Scalars['String']['output']>;
  review?: Maybe<Array<Review>>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addGame?: Maybe<Game>;
  deleteGame?: Maybe<Array<Maybe<Game>>>;
  updateGame?: Maybe<Game>;
};


export type MutationAddGameArgs = {
  game: AddGameInput;
};


export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateGameArgs = {
  edits: EditGameInput;
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  game?: Maybe<Game>;
  games?: Maybe<Array<Maybe<Game>>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  author: Author;
  content: Scalars['String']['output'];
  game: Game;
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
};

export type CreateGameMutationVariables = Exact<{
  game: AddGameInput;
}>;


export type CreateGameMutation = { __typename?: 'Mutation', addGame?: { __typename?: 'Game', title: string, platform: Array<string> } | null };

export type GetGameByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetGameByIdQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: string, title: string } | null };

export type GetGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGamesQuery = { __typename?: 'Query', games?: Array<{ __typename?: 'Game', id: string, title: string } | null> | null };


export const CreateGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"game"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddGameInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"game"},"value":{"kind":"Variable","name":{"kind":"Name","value":"game"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}}]}}]}}]} as unknown as DocumentNode<CreateGameMutation, CreateGameMutationVariables>;
export const GetGameByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGameById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetGameByIdQuery, GetGameByIdQueryVariables>;
export const GetGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetGamesQuery, GetGamesQueryVariables>;