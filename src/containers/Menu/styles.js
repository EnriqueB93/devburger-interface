import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BannerHamburger from '../../assets/bannerhamburger.svg';
import Background from '../../assets/bg.svg';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;
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
background-color: #1f1f1f;
background-position: center;
background-size: cover;
position: relative;

h1{
    font-family: Road Rage;
    font-weight: 400;
    color: #fff;
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
color: #9758A6;
text-decoration: none;
font-size: 24px;
border-bottom: 3px solid #9758a6;
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
