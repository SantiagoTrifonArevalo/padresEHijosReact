import React, { useState } from 'react';
import './LikeButtonB.css';

function LikeButtonB() {
  const [count, setCount] = useState(0);
  const colors = ['transparent', 'purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [colorIndex, setColorIndex] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    const nextColorIndex = (colorIndex + 1 === colors.length) ? 0 : colorIndex + 1;
    setColorIndex(nextColorIndex);
  };

  const getButtonStyle = () => {
    if (colors[colorIndex] === 'transparent' || colors[colorIndex] === 'yellow') {
      return {
        backgroundColor: colors[colorIndex],
        color: 'black', 
        padding: '10px 20px',
        border: '3px solid grey',
        cursor: 'pointer',
      };
    } else {
      return {
        backgroundColor: colors[colorIndex],
        color: 'white',
        padding: '10px 20px',
        border: '3px solid grey',
        cursor: 'pointer',
      };
    }
  };

  const likeButtonStyle = getButtonStyle();

  return (
    <div className="LikeButtonB">
      <button style={likeButtonStyle} onClick={incrementCount}>
        Like {count}
      </button>
    </div>
  );
}

export default LikeButtonB;

