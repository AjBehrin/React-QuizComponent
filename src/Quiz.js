import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render() {

        const isQuizEnd = () => {
            if ((this.state.quiz_position - 1) === quizData.quiz_questions.length) {
                return true;
            } else {
                return false; 
            }
        }

        let checkQuiz = isQuizEnd();

        const quizDisplay = (check) => {
            if (check === true) {
                return <QuizEnd />;
            } else if (check === false) {
                return <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />;
            }
        }

        return (
            <div>
                {quizDisplay(checkQuiz)}
            </div>
        )
    }
}

export default Quiz;