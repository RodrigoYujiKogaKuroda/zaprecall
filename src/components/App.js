import { useState, useEffect } from 'react';

import GlobalStyle from '../theme/globalStyle';

import MainMenu from './MainMenu';
import Footer from './Footer';
import CARDS from "./Cards";

import PlayArrow from "../assets/img/seta_play.png";
import RightIcon from "../assets/img/icone_certo.png";
import WrongIcon from "../assets/img/icone_erro.png";
import AlmostIcon from "../assets/img/icone_quase.png";

export default function App() {

    const [color, setColor] = useState([]);
    const [cardImage, setCardImage] = useState([]);
    const [isEnabled, setIsEnabled] = useState([]);
    const [isAnswered, setIsAnswered] = useState([]);
    const [buttonIsDisabled, setButtonIsDisabled] = useState([]);
    const [turnButtonIsDisabled, setTurnButtonIsDisabled] = useState(false);
    const [answerButtonIsDisabled, setAnswerButtonIsDisabled] = useState(true);
    
    const numberOfQuestions = CARDS.length;
    const red = "#FF3030"
    const yellow = "#FF922E"
    const green = "#2FBE34"
    const grey = "#333333"

    useEffect(() => {
        const colorArray = [];
        const imageArray = [];
        const enabledArray = [];
        const answeredArray = [];
        const disabledButtons = [];
        for (let i = 0; i < CARDS.length; i++) {
            color.push(grey);
            imageArray.push(PlayArrow);
            enabledArray.push(true);
            answeredArray.push(false);
            disabledButtons.push(false);
        }
        setColor(colorArray);
        setCardImage(imageArray);
        setIsEnabled(enabledArray);
        setIsAnswered(answeredArray);
        setButtonIsDisabled(disabledButtons);
    }, []);

    function markAnswer(backgroundColor, questionsAnswered, setQuestionsAnswered) {
        const colorArray = color;
        const imageArray = cardImage;
        const disabledButtons = buttonIsDisabled;
        const enabledArray = [];
        for (let i = 0; i < CARDS.length; i++) {
            if (isEnabled[i] === false && color[i] !== "#333333") {
                colorArray[i] = backgroundColor;
                if (backgroundColor === red) {
                    imageArray[i] = WrongIcon;
                } else if (backgroundColor === yellow) {
                    imageArray[i] = AlmostIcon;
                } else if (backgroundColor === green) {
                    imageArray[i] = RightIcon;
                }
            } else {
                disabledButtons[i] = false;
            }
            enabledArray.push(true);
        }
        setColor(colorArray);
        setIsEnabled(enabledArray);
        setQuestionsAnswered(questionsAnswered + 1);
        setButtonIsDisabled(disabledButtons);
        setTurnButtonIsDisabled(false);
        setAnswerButtonIsDisabled(true);
    }

    return (
        <>
            <GlobalStyle />
            <MainMenu
                color={color}
                cardImage={cardImage}
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