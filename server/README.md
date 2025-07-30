# GraphQL Crash Course Project

This is a short GraphQL crash course project based on the tutorial offered by **FreeCodeCamp** and developed by **NetNinja**.

- **Course link:** [GraphQL Crash Course](https://www.youtube.com/watch?v=5199E50O7SI&t=4910s)

## How to Run the Project

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal or command prompt.
3. Run the following command to start the server with nodemon:

- **bash**
nodemon index.js

## How to Test the GraphQL Endpoint
Once the server is running:
Open your browser and go to http://localhost:<port> (replace <port> with the port number your server is listening on).

This will open the Apollo Server’s GraphQL playground where you can test queries and mutations.

query ReviewQuery($id: ID!) {
  review(id: $id) {
    rating
    content
  }
}
