import { useState } from 'react';

import GlobalStyle from '../theme/globalStyle';

import MainMenu from './MainMenu';
import Footer from './Footer';
import CARDS from "./Cards";

export default function App() {

    const [isEnabled, setIsEnabled] = useState([]);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
    const [turnButtonIsDisabled, setTurnButtonIsDisabled] = useState(false);
    const [answerButtonIsDisabled, setAnswerButtonIsDisabled] = useState(true);
    
    const numberOfQuestions = CARDS.length;
    let color = "#333333";

    function markAnswer(backgroundColor, questionsAnswered, setQuestionsAnswered) {
        color = backgroundColor;
        const enabledArray = [];
        for (let i = 0; i < CARDS.length; i++) {
            enabledArray.push(true);
        }
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
                isEnabled={isEnabled}
                setIsEnabled={setIsEnabled}
                buttonIsDisabled={buttonIsDisabled}
                setButtonIsDisabled={setButtonIsDisabled}
                turnButtonIsDisabled={turnButtonIsDisabled}
                setTurnButtonIsDisabled={setTurnButtonIsDisabled}
                setAnswerButtonIsDisabled={setAnswerButtonIsDisabled}
                color={color}
            />
            <Footer
                numberOfQuestions={numberOfQuestions}
                markAnswer={markAnswer}
                answerButtonIsDisabled={answerButtonIsDisabled}
            />
        </>
    );

}