import styled from 'styled-components';
import BackgroundLogin from '../../assets/bg-login.svg';
import Background from '../../assets/bg.svg';

export const Container = styled.div`

    display: flex;
    width: 100vw;
    height: 100vh;
`;

export const LeftContainer = styled.div`

    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    max-width: 50%;

    img{
        width: 80%;
    }
`;

export const RightContainer = styled.div`

background: url('${Background}');
background-size: cover;
background-position: center;
background-color: #1e1e1e;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
max-width: 50%;
height: 100%;

`;
export const Title = styled.h2`

font-family: "Road Rage", serif;
font-weight: 400;

font-size: 40px;
line-height: 40px;
text-align: center;
color: #FFF;

span{
    color: #9758A6;
}

`;

export const Form = styled.form`

display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;

width: 100%;
max-width: 400px;

`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;

label{
    color: #fff;
    font-weight: 600;
    font-size: 18px;
}
 input{
        height: 52px;
        border: none;
        border-radius: 5px;
        padding: 0 16px;
    }

  p{
    font-size: 14px;
    font-weight: 600;
    line-height: 80%;
    color: #cf3053;
    height: 10px;
  } 
`;

export const Link = styled.a`

color: #fff;
cursor: pointer;

`;
