
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('/api/games')
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  }, []);

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.game_name}</h2>
            <p>Location: {game.location}</p>
            <p>Difficulty: {game.difficulty}</p>
            <p>Game Type: {game.game_type}</p>
            <p>Is Public: {game.is_public ? 'Yes' : 'No'}</p>
            {game.password && <p>Password: {game.password}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
