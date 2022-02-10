import React, { Component } from "react";
import styles from './Feedback.module.css'

class Feedback extends React.Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    goodFeedback = () => {        
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            };
        })
    };
    neutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            };            
        })
    };
    badFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad+1,    
            };
        })
    };

   
            

    render() {

                function countTotalFeedback(state) {
  return Object.values(state).reduce((a, b) => a + b, 0) 
        };
       
     

        return (
            <div className={styles.container}>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={this.goodFeedback} className={styles.button}>Good</button>
      <button type="button" onClick={this.neutralFeedback} className={styles.button}>Neutral</button>
      <button type="button" onClick={this.badFeedback} className={styles.button}>Bad</button>
      <h2>Statistics</h2>
                <p>Good: <span>{this.state.good}</span></p> 
                <p>Neutral: <span>{this.state.neutral}</span></p>
                <p>Bad: <span>{this.state.bad}</span></p>
                <p>Total: <span>{countTotalFeedback(this.state)}</span></p>
                <p>Positive feedback: <span></span>%</p>
    </div>

        )
    };
};

export default Feedback;