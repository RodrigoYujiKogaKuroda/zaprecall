import { useState } from 'react';
import styled from 'styled-components';

export default function Footer({numberOfQuestions, markAnswer, answerButtonIsDisabled}) {

    const [questionsAnswered, setQuestionsAnswered] = useState(0);

    return (
        <>
        <PageFooter>
            <ButtonContainer>
                <RememberButton
                    onClick={() => (markAnswer("#FF3030", questionsAnswered, setQuestionsAnswered))}
                    backgroundColor="#FF3030"
                    disabled={answerButtonIsDisabled}
                    data-identifier="forgot-btn"
                >
                    Não lembrei
                </RememberButton>
                <RememberButton
                    onClick={() => (markAnswer("#FF922E", questionsAnswered, setQuestionsAnswered))}
                    backgroundColor="#FF922E"
                    disabled={answerButtonIsDisabled}
                    data-identifier="almost-forgot-btn"
                >
                    Quase não lembrei
                </RememberButton>
                <RememberButton
                    onClick={() => (markAnswer("#2FBE34", questionsAnswered, setQuestionsAnswered))}
                    backgroundColor="#2FBE34"
                    disabled={answerButtonIsDisabled}
                    data-identifier="zap-btn"
                >
                    Zap!
                </RememberButton>
            </ButtonContainer>
            <p data-identifier="flashcard-counter">
                {questionsAnswered}/{numberOfQuestions} concluídos
            </p>
        </PageFooter>
        </>
    );

}

const PageFooter = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`
const RememberButton = styled.button`
    width: 90px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.backgroundColor};
    border-radius: 5px;
    border: 1px solid ${props => props.backgroundColor};
    padding:5px;
    cursor: pointer;

    :disabled{
        cursor: default;
    }
`