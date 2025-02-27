import styled from 'styled-components';

export const ContainerButton = styled.button`
width: 100%;
height: 40px;
background-color: ${(props) => props.theme.purple};
border-radius: 7.78px;
border: none;
font-size: 25px;

&&:hover{
    background-color: ${(props) => props.theme.secondDarkPurple};

}

`;
