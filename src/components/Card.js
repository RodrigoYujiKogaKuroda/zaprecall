import { useState } from 'react';
import styled from 'styled-components';

import PlayArrow from "../assets/img/seta_play.png";
import TurnArrow from "../assets/img/seta_virar.png";

export default function Card({isEnabled, cardNumber, question, answer, turnToQuestion, turnToAnswer}) {

    const QuestionNumber = cardNumber + 1;

    return (
        <>
            <ClosedQuestion isEnabled={!isEnabled}>
                <p>Pergunta {QuestionNumber}</p>
                <img src={PlayArrow} alt="play" onClick={() => {turnToQuestion(cardNumber)}}></img>
            </ClosedQuestion>
        </>
    );
}

const ClosedQuestion = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.isEnabled ? "flex" : "none"};
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const OpenedQuestion = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props => props.isEnabled ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`