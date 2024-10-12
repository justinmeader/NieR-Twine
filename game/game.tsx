import React, { useEffect } from 'react';

const Game: React.FC = () => {
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/game/story.tw`)
      .then((response) => response.text())
      .then((html) => {
        const container = document.getElementById('game-container');
        if (container) {
          container.innerHTML = html;
        }
      })
      .catch((error) => {
        console.error('Error loading the game:', error);
      });
  }, []);

  return (
    <div id="game-container"></div>
  );
};

export default Game;
