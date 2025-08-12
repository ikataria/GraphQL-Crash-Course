import "./App.css";
import { useState } from "react";
import { useGetGamesQuery, useGetGameByIdQuery, useCreateGameMutation } from './gql'; // adjust path to your generated folder

// import { useQuery, useMutation, gql } from "@apollo/client";
// import GetGames from "./graphql/game.graphql";

// region queries
// const GET_GAMES = gql`
//   query GetGames {
//     games {
//       id
//       title
//     }
//   }
// `;

// const GET_GAME_BY_ID = gql`
//   query GetGameById($id: ID!) {
//     game(id: $id) {
//       id
//       title
//     }
//   }
// `;
// region end

// region mutation
// const ADD_GAME = gql`
//   mutation CreateGame($game: AddGameInput!) {
//     addGame(game: $game) {
//       title
//       platform
//     }
//   }
// `;
// region end

function App() {

  const [newGame, setNewGame] = useState({});

  // List of Games
  // const {
  //   data: getGamesData,
  //   error: getGamesError,
  //   loading: getGamesLoading,
  // } = useQuery(GET_GAMES);
  const { data: getGamesData, error: getGamesError, loading: getGamesLoading } = useGetGamesQuery();


  // Find a Game
  // const {
  //   data: getGameData,
  //   error: getGameError,
  //   loading: getGameLoading,
  // } = useQuery(GET_GAME_BY_ID, {
  //   variables: {
  //     id: "3",
  //   },
  // });

  // Create a Game
  // const [addGame, { data, loading, error }] = useMutation(ADD_GAME);
  const [addGame, { data, loading, error }] = useCreateGameMutation();


  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleChange = async (e) => {
    // setNewGame((prev) => ({...prev, title: e.target.value}))
    setNewGame({title: e.target.value})
  }
  
  const handleSubmit = async () => {
    addGame({
      variables: {
        game: {
          title: newGame.title,
          platform: newGame.platform ? [newGame.platform] : []
        }
      }
    })
  }

  // Before jsx return, conditions check
  if (getGamesLoading) return <p>Data Loading....</p>;
  if (getGamesError) return <p>ERROR: {getGamesError.message}</p>;

  // jsx
  return (
    <>
      <input type="text" placeholder="Title..." onChange={handleChange}/>
      <input type="text" placeholder="Platform..." onChange={(e) => setNewGame((prev) => ({...prev, platform: e.target.value}))}/>
      <button onClick={handleSubmit}>Add new Game</button>
      <h2>Games</h2>
      <div>
        {getGamesData.games.map((user) => (
          <div key={user.id}>
            <p>
              {user.id}: {user.title}
            </p>
          </div>
        ))}
      </div>

      <h2>Fav Game</h2>
      <div>{getGameData?.game?.title}</div>
    </>
  );
}

export default App;
