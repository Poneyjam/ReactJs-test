import React from 'react';

function Game({ score, onScoreChange }) {
    const handleIncrement = () => {
        onScoreChange(score + 1);
    };
    const handleDecrement = () => {
        onScoreChange(score - 1);
    };

    return (
        <div className='game'>
            <p>The game here</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Game;
