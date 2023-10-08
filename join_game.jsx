import React, { useState } from 'react';
import axios from 'axios';

const JoinGame = () => {
  const [gameId, setGameId] = useState('');
  const [password, setPassword] = useState('');
  const [joinSuccess, setJoinSuccess] = useState(null);

  const joinGame = () => {
    const data = {
      gameId,
      password,
    };

    axios
      .post('/api/join_game', data)
      .then((response) => {
        // Handle success
        console.log('Joined game successfully:', response.data);
        setJoinSuccess('Joined game successfully'); 
      })
      .catch((error) => {
        // Handle errors
        console.error('Error joining game:', error);
        setJoinSuccess('Error joining game'); 
      });
  };

  return (
    <div>
      <h1>Join Game</h1>
      {joinSuccess && <div>{joinSuccess}</div>} {Successfully joined game}
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
