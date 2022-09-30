import styled from 'styled-components';

export default function Footer() {

    return (
        <>
        <PageFooter>
            <ButtonContainer>
                <RememberButton backgroundColor="#2FBE34">Não lembrei</RememberButton>
                <RememberButton backgroundColor="#FF922E">Quase não lembrei</RememberButton>
                <RememberButton backgroundColor="#FF3030">Zap!</RememberButton>
            </ButtonContainer>
            0/4 concluídos
        </PageFooter>
        </>
    );

}

const PageFooter = styled.div`
    @media (max-width: 667px) {
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
    }
`

const ButtonContainer = styled.div`
    @media (max-width: 667px) {
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
    }
`
const RememberButton = styled.button`
    @media (max-width: 667px) {
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
    }
`