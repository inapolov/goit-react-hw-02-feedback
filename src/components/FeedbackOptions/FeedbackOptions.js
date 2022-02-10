import React from "react";
import styles from './FeedbackOptions.module.css';

// class FeedbackOptions extends React.Component {
    

//     render() {
//         return (        
//                     <>
//                   <button type="button" onClick={this.props.onGood} className={styles.button}>Good</button>
//       <button type="button" onClick={this.props.onNeutral} className={styles.button}>Neutral</button>
//                         <button type="button" onClick={this.props.onBad} className={styles.button}>Bad</button> 
//              </>            
                
//     )
//     }
// };  
    
    
    
function FeedbackOptions({onGood,onNeutral,onBad}) {
    return (
        <>
        
      <button type="button" onClick={onGood} className={styles.button}>Good</button>
      <button type="button" onClick={onNeutral} className={styles.button}>Neutral</button>
            <button type="button" onClick={onBad} className={styles.button}>Bad</button>
            
        </>
        
    )
};

export default FeedbackOptions;