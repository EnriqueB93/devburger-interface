import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
height: 72px;
background-color: #1f1f1f;
padding: 0 56px;

`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

width: 100%;
max-width: 1280px;
margin: 0 auto;

`;

export const Navigation = styled.nav`

display: flex;
justify-content: center;
align-items: center;
height: 72px;

div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
`;
export const HeaderLink = styled(Link)`
color: #fff;
text-decoration: none;
font-family: Poppins;
font-size: 14px;

&:hover{
color: #9758A6;
}

`;
export const Option = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 48px;
`;
export const Profile = styled.div`
display:flex;
align-items: center;
font-size: 14px;
gap: 15px;


 p{
  color: #fff;
  text-decoration: none;
 font-family: Poppins;
 font-size: 14px;}

span{
    color: #9758A6;

}
`;
export const Logout = styled.button`
border:none;
background-color: transparent;
font-family: Poppins;
font-size: 14px;
color: #9E1C00;
text-align: center;

`;

export const LinkContainer = styled.div`
display: flex;
gap: 15px;
align-items: center;

`;
