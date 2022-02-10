import React, { Component } from "react";
import styles from './Feedback.module.css'
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "components/Section";

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
            const total = state.good + state.neutral + state.bad;
            return total;
        };
        function countPositiveFeedbackPercentage(state) {
            const total = state.good + state.neutral + state.bad;
            const percentage = Math.round(state.good / total * 100)||0;
            return percentage;
        }
       
        
        return (
            
<Section title="Please leave feedback">
    <FeedbackOptions onGood={this.goodFeedback} onNeutral={this.neutralFeedback} onBad={this.badFeedback} />     
    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={countTotalFeedback(this.state)} positivePercentage={countPositiveFeedbackPercentage(this.state)}/>
</Section>
        
        )
    };
};

export default Feedback;