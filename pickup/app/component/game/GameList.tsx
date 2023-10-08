import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Game = {
  id: number,
  location: string,
  difficult: number,
  time: Date, 
  is_public: boolean,
  creator_name: string
  // Add other fields as needed
};

function CardList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('api/view_games')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-list">
      {data.map((item: Game) => (
        <div className="card" key={item.id}>
          <h2>{item.creator_name}'s game</h2>
          <p>{item.location}</p>
          <p>{item.difficult}</p>
          <p>{item.is_public}</p>
          {/* Add other card content here */}
        </div>
      ))}
    </div>
  );
}

export default CardList;









// import React, { useState, useEffect } from 'react';

// const ViewGames = () => {
//   const [availableGames, setAvailableGames] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch('/view_games')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setAvailableGames(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching games:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Available Games</h2>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {availableGames.map((game) => (
//             <li key={game.id}>
//               <span>Game Name: {game.name}</span>
//               {}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ViewGames;
