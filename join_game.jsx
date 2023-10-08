import React, { useState } from 'react';
import axios from 'axios';

const JoinGame = () => {
  const [gameId, setGameId] = useState('');
  const [password, setPassword] = useState('');

  const joinGame = () => {
    const data = {
      gameId,
      password,
    };

    axios.post('/api/join_game', data)
      .then((response) => {
        console.log('Joined game successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error joining game:', error);
      });
  };

  return (
    <div>
      <h1>Join Game</h1>
      <div>
        <label>Game ID:</label>
        <input
          type="text"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
      </div>
      <div>
        <label>Password (if required):</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={joinGame}>Join Game</button>
    </div>
  );
};

export default JoinGame;
