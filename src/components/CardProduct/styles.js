import styled from 'styled-components';

export const Container = styled.div`

display: flex;
align-items: center;
flex-direction: column;
gap: 40px;
background-color: ${(props) => props.theme.white}fff;
border-radius: 29px;
padding: 25px;
cursor: grab;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: relative;

div{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;
}

p{
font-family: Poppins;
font-size: 18px;
font-weight: 700;
line-height: 14.58px;
color: ${(props) => props.theme.orange};
margin-top: 40px;
}

strong{
font-family: Poppins;
font-size: 18px;
font-weight: 700;
line-height: 14.58px;
color: ${(props) => props.theme.black};

}

`;

export const CardImage = styled.img`

height: 100px;
position: absolute;
top: -50px;

`;
