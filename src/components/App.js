import GlobalStyle from '../theme/globalStyle';
import MainMenu from './MainMenu';
import Footer from './Footer';
import CARDS from "./Cards";
import { useState } from 'react';

export default function App() {

    const [answerButtonIsDisabled, setAnswerButtonIsDisabled] = useState(true);
    const numberOfQuestions = CARDS.length;
    let color = "";

    function markAnswer(backgroundColor, questionsAnswered, setQuestionsAnswered) {
        color = backgroundColor;
        setQuestionsAnswered(questionsAnswered + 1);
        setAnswerButtonIsDisabled(true);
    }

    return (
        <>
            <GlobalStyle />
            <MainMenu
                color={color}
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