import styled from 'styled-components';
import BannerHome from '../../assets/banner.svg';
import Background from '../../assets/bg.svg';

export const Banner = styled.div`

background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 457px;


h1{
font-family: "Road Rage", serif;
font-weight: 400;
font-size: 80px;
line-height: 40px;
position: absolute;
top:10%;
right: 20%;
color: #f4f4f4;
}


`;
export const Container = styled.section`
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
    url('${Background}');
background-size: cover;
background-position: center;
height: 500px;

`;
export const Content = styled.div``;
