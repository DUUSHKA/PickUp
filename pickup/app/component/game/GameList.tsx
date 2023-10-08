import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GiBasketballJersey } from 'react-icons/gi';

type Game = {
  id: number;
  location: string;
  difficult: number;
  time: Date;
  is_public: boolean;
  creator_name: string;
  password?: string; // Optional if the password might not be returned or can be null
};

const GameList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5001/api/view_games')
      .then(response => {
        setGames(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="game-list">
      {isLoading ? (
        <p>Loading games...</p>
      ) : (
        games.map(game => (

          // <div className="game-card" key={game.id}>
          //   <h2>{game.creator_name}'s game</h2>
          //   <p>Location: {game.location}</p>
          //   <p>Difficulty: {game.difficult}</p>
          //   <p>Public: {game.is_public ? 'Yes' : 'No'}</p>
          // </div>

            <div className="h-screen flex justify-center gap-12 items-center">

            <Card className="border-[#ee7b42] border-4 bg-[#efcab1] hover:brightness-105">
              <CardHeader>
                <CardTitle><div className="game-card"></div></CardTitle>
              </CardHeader>
              <div className="flex items-center justify-center">
                <CardContent>
                      
                   <h2>{game.game_name}</h2>
                   <p>Location: {game.location}</p>
                   <p>Public: {game.is_public ? 'Yes' : 'No'}</p>
                 
                </CardContent>
              </div>
            </Card>
            </div>
                      
        ))
      )}
    </div>
  );
}

export default GameList;
