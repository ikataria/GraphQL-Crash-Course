import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {typeDefs} from "./schema.js";
import db from "./_db.js";


const resolvers= {
    Query: {
        games(){
            return db.games
        },
        game(_, args){
            return db.games.find((game) => game.id === args.id)
        },
        authors(){
            return db.authors
        },
        // author(_, args){
        //     return db.authors.find((author) => author.id === args.id)
        // },
        author: (_, args) => {
             return db.authors.find((author) => author.id === args.id)
        },
        reviews(){
            return db.reviews;
        },
        review(_, args){
            return db.reviews.find((review) =>  review.id === args.id)
        }
    },
    Game: {
        review(parent){
            return db.reviews.filter((r) => r.game_id === parent.id)
        }
    },
    Author: {
        review(parent){
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    Review: {
        game(parent){
            return db.games.filter((g) => g.id === parent.id)
        },
        author(parent){
            return db.authors.filter((a) => a.id === parent.id)
        }
    },
    Mutation: {
        deleteGame(_, args){
            db.games = db.games.filter((game) => game.id !== args.id)

            return db.games
        },
        addGame(_, args){
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }

            console.log("game", game)

            db.games.push(game);
            return game;
        },
        updateGame(_,args){
            db.games = db.games.map((g) => {
                if(g.id === args.id){
                    return {...g, ...args.edits}
                }
                return g
            })

            return db.games.find((g) => g.id === args.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})


console.log("Server started on", url);



// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
// import {typeDefs} from './schema.js'
// import db from './_db.js';

// const resolvers = {
//     Query:{
//         reviews(){
//             return db.reviews;
//         },
//         review(_, args){
//             return db.reviews.find((review) => review.id === args.id)
//         },
//         games(){
//             return db.games;
//         },
//         game(_, args){
//             return db.games.find((game) => game.id === args.id)
//         },
//         authors(){
//             return db.authors;
//         },
//         author(_, args){
//             console.log(args);
            
//             return db.authors.find((author) => author.id === args.id)
//         }
//     },
//     Game: {
//         reviews(parent){
//             return db.reviews.filter((r) => r.game_id === parent.id)
//         }
//     },
//     Author:{
//         reviews(parent){
//             return db.reviews.filter((r) => r.author_id === parent.id)
//         }
//     },
//     Review:{
//         author(parent){
//             return db.authors.find((a) => a.id === parent.author_id)
//         },
//         game(parent){
//             return db.games.find((g) => g.id === parent.game_id)
//         }
//     },
//     Mutation: {
//         addGame(_, args){
//             let game = {
//                 ... args.game,
//                 id: Math.floor(Math.random() * 1000).toString()
//             }

//             db.games.push(game)
//             return game
//         },
//         deleteGame(_, args){
//             db.games = db.games.filter(g => g.id !== args.id);

//             return db.games
//         }
//     }
// }

// const server = new ApolloServer({
//     typeDefs,
//     resolvers 
// });

// const {url} = await startStandaloneServer(server,{
//     port: 4000,
// })

// console.log(`🚀  Server ready at: ${4000}`);
