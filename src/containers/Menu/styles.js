import styled from 'styled-components';
import BannerHamburger from '../../assets/bannerhamburger.svg';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;

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
    font-weight: 400;
    font-size: 20px;
    line-height: 13px;

    }
}


`;
export const CategoryMenu = styled.div``;
export const ProductContainer = styled.div``;
