import React from "react";


function Statistics({good,neutral,bad,total,positivePercentage}) {
    return (
        <>
        <h2>Statistics</h2>
                <p>Good: <span>{good}</span></p> 
                <p>Neutral: <span>{neutral}</span></p>
                <p>Bad: <span>{bad}</span></p>
                <p>Total: <span>{total}</span></p>
                <p>Positive feedback: <span>{positivePercentage}</span>%</p>
        </>
    )
};

export default Statistics;