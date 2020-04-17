import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());

  // Wave 2
  // create onClickCallback function that changes the value of the square when it is clicked
  const onClickCallback = (id) => {
    // construct a new 2D array with the value of the selected square (the one whose ID we are passing in) changed to either 'x' or 'o'
    // set state logic, on click:
    // if the player is set to 'x', set it to 'o'
    // if the player is set to 'o', set it to 'x'
    setSquares() // pass the new array in here
  };
  // adds prop onClickCallback  to Board component on Line 54

  const checkForWinner = () => {
    // Complete in Wave 3

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} />
      </main>
    </div>
  );
}

export default App;
