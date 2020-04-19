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
  const [winner, setWinner] = useState('...');

  const onClickCallback = (id) => {
    if (winner !== '...') return;

    if (id >= 0 && id <= 2) {
      squares[0][id]['value'] = mark; // if square is in row 1
    } else if (id >= 3 && id <= 5) {
      squares[1][id-3]['value'] = mark; // if square is in row 2
    } else if (id >= 6 && id <= 8) {
      squares[2][id-6]['value'] = mark; // if square is in row 3
    };

    (mark === PLAYER_1) ? setMark(PLAYER_2) : setMark(PLAYER_1); // toggle 'X' or 'O'
    
    setSquares(squares); // updates the state
    checkForWinner();
  };

  const checkForWinner = () => {
    const threeX = ['X', 'X', 'X'];
    const threeO = ['O', 'O', 'O'];

    const rowValues = (row) => {
      return row.map(square => square.value);
    }; // helper function for creating an array of row values

    const colValues = (col) => {
      if (col === 1) {
        return [squares[0][0].value, squares[1][0].value, squares[2][0].value];
      } else if (col === 2) {
        return [squares[0][1].value, squares[1][1].value, squares[2][1].value];
      } else if (col === 3) {
        return [squares[0][2].value, squares[1][2].value, squares[2][2].value];
      };
    }; // helper function for creating an array of column values

    const diagValues = (diag) => {
      if (diag === 1) {
        return [squares[0][0].value, squares[1][1].value, squares[2][2].value];
      } else if (diag === 2) {
        return [squares[2][0].value, squares[1][1].value, squares[0][2].value];
      };
    }; // helper function for creating an array of diagonal values
  
    const arrayEquals = (one, two) => {
      return JSON.stringify(one) === JSON.stringify(two); 
    }; // from Chelsea's solution posted in the C13 Slack #classroom-support channel

    if ( // win conditions for X
      arrayEquals(rowValues(squares[0]), threeX) || // row 1
      arrayEquals(rowValues(squares[1]), threeX) || // row 2
      arrayEquals(rowValues(squares[2]), threeX) || // row 3
      arrayEquals(colValues(1), threeX) || // column 1
      arrayEquals(colValues(2), threeX) || // column 2 
      arrayEquals(colValues(3), threeX) || // column 3
      arrayEquals(diagValues(1), threeX) || // falling diagonal
      arrayEquals(diagValues(2), threeX) // rising diagonal
      ) {
      setWinner(PLAYER_1); 
      
    } else if ( // win conditions for O
      arrayEquals(rowValues(squares[0]), threeO) || // row 1
      arrayEquals(rowValues(squares[1]), threeO) || // row 2
      arrayEquals(rowValues(squares[2]), threeO) || // row 3
      arrayEquals(colValues(1), threeO) || // column 1
      arrayEquals(colValues(2), threeO) || // column 2 
      arrayEquals(colValues(3), threeO) || // column 3
      arrayEquals(diagValues(1), threeO) || // falling diagonal
      arrayEquals(diagValues(2), threeO) // rising diagonal
      ) {
      setWinner(PLAYER_2); 
    
    } else if (squares.flat().every(square => square.value !== '')) { 
      setWinner('TIE'); // does not trigger until every square has been filled
    };
  };

  const resetGame = () => {
    // can I just like...
    // set the squares back to generateSquares()
    setSquares(generateSquares());
    setMark(PLAYER_1);
    setWinner('...');
    // and add an onClick prop to the Reset Game button that calls the function on click?
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;
