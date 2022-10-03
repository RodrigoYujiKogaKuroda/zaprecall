import { useState, useEffect } from 'react';

import GlobalStyle from '../theme/globalStyle';

import MainMenu from './MainMenu';
import Footer from './Footer';
import CARDS from "./Cards";

export default function App() {

    const [color, setColor] = useState([]);
    const [isEnabled, setIsEnabled] = useState([]);
    const [isAnswered, setIsAnswered] = useState([]);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
    const [turnButtonIsDisabled, setTurnButtonIsDisabled] = useState(false);
    const [answerButtonIsDisabled, setAnswerButtonIsDisabled] = useState(true);
    
    const numberOfQuestions = CARDS.length;

    useEffect(() => {
        const colorArray = [];
        const enabledArray = [];
        const answeredArray = [];
        for (let i = 0; i < CARDS.length; i++) {
            color.push("#333333");
            enabledArray.push(true);
            answeredArray.push(false);
        }
        setColor(colorArray);
        setIsEnabled(enabledArray);
        setIsAnswered(answeredArray);
    }, []);

    function markAnswer(backgroundColor, questionsAnswered, setQuestionsAnswered) {
        const colorArray = color;
        const enabledArray = [];
        for (let i = 0; i < CARDS.length; i++) {
            if (isEnabled[i] === false && color[i] !== "#333333") {
                colorArray[i] = backgroundColor;
            }
            enabledArray.push(true);
        }
        setColor(colorArray);
        setIsEnabled(enabledArray);
        setQuestionsAnswered(questionsAnswered + 1);
        setButtonIsDisabled(false);
        setTurnButtonIsDisabled(false);
        setAnswerButtonIsDisabled(true);
    }

    return (
        <>
            <GlobalStyle />
            <MainMenu
                color={color}
                isEnabled={isEnabled}
                setIsEnabled={setIsEnabled}
                isAnswered={isAnswered}
                setIsAnswered={setIsAnswered}
                buttonIsDisabled={buttonIsDisabled}
                setButtonIsDisabled={setButtonIsDisabled}
                turnButtonIsDisabled={turnButtonIsDisabled}
                setTurnButtonIsDisabled={setTurnButtonIsDisabled}
                setAnswerButtonIsDisabled={setAnswerButtonIsDisabled}
            />
            <Footer
                numberOfQuestions={numberOfQuestions}
                markAnswer={markAnswer}
                answerButtonIsDisabled={answerButtonIsDisabled}
            />
        </>
    );

}