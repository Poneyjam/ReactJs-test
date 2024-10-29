import React from 'react';

function Infos( { score, message}) {
    message = score > 10 ? "Bravo !" : score < 10 ? "Arff !" : "Continue";

    return (
        <div className='infos'>
            <h2>Infos</h2>
            <span>{message}</span>
        </div>
    );
}

export default Infos;
