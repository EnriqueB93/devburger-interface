import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BannerHamburger from '../../assets/bannerhamburger.svg';
import Background from '../../assets/bg.svg';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${(props) => props.theme.secondWhite};
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
    url('${Background}');

`;
export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;


background: url("${BannerHamburger}") no-repeat;
background-color: ${(props) => props.theme.mainBlack};
background-position: center;
background-size: cover;
position: relative;

h1{
    font-family: Road Rage;
    font-weight: 400;
    color: ${(props) => props.theme.white};
    font-size: 80px;
    line-height:65.94px;
    text-align:center;
    position: absolute;
    top: 30%;
    right: 20%;

  span{
    display: block;
    font-family: Poppins;
    font-size: 20px;
    line-height: 13px;

    }
}


`;
export const CategoryMenu = styled.div`

display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;

`;
export const CategoryButton = styled(Link)`

font-family: Poppins;
color:${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : '#7b7d7d ')};
text-decoration: none;
font-size: 24px;
border-bottom:${(props) => props.$isActiveCategory && '3px solid #9758a6'} ;
padding-bottom: 5px;
line-height: 20px;
cursor: pointer;
`;

export const ProductContainer = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 60px;
padding: 40px;
justify-content: center;
max-width: 1280px;
margin: 50px auto;

`;

export const BackButton = styled(Link)`
font-family: Poppins;
font-weight: 600;
font-size: 16px;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
padding-bottom:50px
`;
