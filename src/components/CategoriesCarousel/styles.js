import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`

.carousel-item{
padding-right: 40px;

}

padding-left: 30px;
`;
export const Title = styled.h2`
font-family: Poppins;
line-height: 48px;
text-align: center;
font-weight: 800;
font-size:32px;
color: ${(props) => props.theme.purple};
position: relative;
padding: 20px 0;
margin-bottom: 40px;


&::after{
    content: "";
    height: 4px;
    width: 56px;
    background-color: ${(props) => props.theme.purple};
    position: absolute;
    bottom: 0px;
    left: calc(50% - 28px);
}

`;

export const ContainerItems = styled.div`
background: url('${(props) => props.$imageurl}');
background-position: center;
background-size: cover;
width: 100%;
height: 230px;
border-radius: 10px;
display: flex;
align-items: center;


`;

export const CategoryButton = styled(Link)`

    font-family: Poppins;
    line-height: 33.68px;
    color: ${(props) => props.theme.white};
    padding: 10px 37px;
    background-color:rgba(0, 0, 0, 0.49);
    border-radius: 30px;
    font-family: Poppins;
    font-size: 22.45px;
    font-weight: 500;
    margin-top:100px;
    text-decoration: none;

    &:hover{
     background-color:${(props) => props.theme.purple};   
    
    
    }
    `;
