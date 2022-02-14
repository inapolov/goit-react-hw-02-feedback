import React from "react";
import styles from './FeedbackOptions.module.css';


function FeedbackOptions({options, onleaveFeedback}) {
    return (
        <>
            {options.map(option => (
            <button type="button" onClick={()=>onleaveFeedback(option)} className={styles.button}>{option}</button>
        ))}      
            
        </>
        
    )
};

export default FeedbackOptions;