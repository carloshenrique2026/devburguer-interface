import styled from "styled-components";
import BackgroundLogin from '../../assets/background-login.png';
import Background from  '../../assets/background.png';

export const Container = styled.div `
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div `
    background: url('${BackgroundLogin}');
    background-size:  cover;
    background-position:  center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;

    img {
        width: 80%;
    }
`;

export const RightContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background:  url('${Background}')
`;

export const Title = styled.h2 ``;

export const Form = styled.h2 ``;

export const InputContainer = styled.h2 ``;

export const Link = styled.a ``;

export const Button = styled.button ``;