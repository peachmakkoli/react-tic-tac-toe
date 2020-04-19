import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {  
  const setSquareValue = () => {
    if (props.value === '') props.onClickCallback(props.id); // will not call onClickCallback if the square already has an 'X' or 'O'
  };
  
  return <button
    className="square" 
    key={props.id} 
    onClick={setSquareValue}
  >
    {props.value}
  </button>
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
