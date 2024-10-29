import React from 'react';

function Score( { score }) {
    if (score > 50) {
        return ;
    }

    return (
        <div className='score'>
            <span>Score : {score} ⭐ </span>
        </div>
    );
}

export default Score;
