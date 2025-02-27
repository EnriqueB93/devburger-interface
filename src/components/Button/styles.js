import styled from 'styled-components';

export const ContainerButton = styled.button`

font-family: "Road Rage", serif;
font-weight: 400;
font-size: 40px;
border: none;
border-radius: 5px;
width: 100%;
height: 52px;

background-color: ${(props) => props.theme.purple};
color: ${(props) => props.theme.white};

&:hover{

    background-color: ${(props) => props.theme.secondDarkPurple};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
border-radius: 5px;
;
}

`;
