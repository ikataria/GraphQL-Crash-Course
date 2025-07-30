export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        platform: [String!]!
        review: [Review!]
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        review: [Review!]
    }

    type Review {
        id: ID!,
        rating: Int!,
        content: String!
        game: Game!
        author: Author!
    }

    # This is the entry point to the Graph using special query type. This is root query
    type Query{
        games: [Game],
        game(id: ID!): Game,
        authors: [Author],
        author(id: ID!):Author, 
        reviews: [Review],
        review(id: ID!):Review
    }

    type Mutation{
        deleteGame(id: ID!): [Game],
        addGame(game: AddGameInput!): Game,
        updateGame(id: ID!, edits: EditGameInput!): Game
    }

    input AddGameInput{
        title: String!,
        platform: [String!]!
    }

    input EditGameInput{
        title: String,
        platform: [String]

    }
`