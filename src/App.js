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
  const [mark, setMark] = useState(PLAYER_1);

  const onClickCallback = (id) => {
    if (id >= 0 && id <= 2) {
      squares[0][id]['value'] = mark; // if square is in row 1
    } else if (id >= 3 && id <= 5) {
      squares[1][id-3]['value'] = mark; // if square is in row 2
    } else if (id >= 6 && id <= 8) {
      squares[2][id-6]['value'] = mark; // if square is in row 3
    };

    (mark === PLAYER_1) ? setMark(PLAYER_2) : setMark(PLAYER_1); // toggle 'X' or 'O'
    
    setSquares(squares); // updates the state
  };

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
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;
